import React, { useEffect, useState } from 'react'

import "../assets/style/services.css"
import { WLBlockHeader, WLHeader, WLText } from '../libraries/Web-Legos/components/Text';

import { blockHeaderFill } from "../assets/style/colors";
import { ExternalResource } from '../api/siteModels.ts';
import { AddModelButton, ModelEditButton, ModelEditModal } from '../libraries/Web-Legos/components/Modals';
import { Card, Divider, Text } from '@nextui-org/react';
import { SiteModel } from '../libraries/Web-Legos/api/models.ts';
import { useContext } from 'react';
import { AuthenticationManagerContext, CurrentSignInContext } from '../App';

export default function Resources() {

  const {currentSignIn} = useContext(CurrentSignInContext);
  const {authenticationManager} = useContext(AuthenticationManagerContext);

  const [userCanEditText, setUserCanEditText] = useState(false);
  const [userCanEditResources, setUserCanEditResources] = useState(false);
  
  useEffect(() => {
    authenticationManager.getPermission(currentSignIn, "siteText").then(p => setUserCanEditText(p));
    authenticationManager.getPermission(currentSignIn, "external-resources").then(p => setUserCanEditResources(p));
  }, [authenticationManager, currentSignIn]);
  
  const [resources, setResources] = useState([]);

  const [modelEditModalOpen, setModelEditModalOpen] = useState(false);
  const [currentModel, setCurrentModel] = useState(new SiteModel());

  useEffect(() => {
    ExternalResource.getAndSet(setResources);
  }, [])

  function ExternalResourceCard({resource}) {
    return (
      <div className="w-100 p-2 d-flex flex-row align-items-center justify-content-center">
        <Card
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center", 
            justifyContent: "space-between",
          }}
          className="d-none d-lg-flex"
          isPressable
          isHoverable
          onPress={() => window.open(resource.link, "_blank")}
        >
          <Card.Image style={{height: "100%", width: "100%", maxWidth: 300, maxHeight: 300,}} src={resource.imageSource}/>
          <div style={{flex: 1}} className="d-flex flex-column align-items-center justify-content-center">
            <div>
              <Text b>{resource.title}</Text>
              <Divider />
            </div>
            <Text>{resource.description}</Text>
          </div>
        </Card>
        <Card
          style={{
            width: "100%",
            flexDirection: "column",
            alignItems: "center", 
            justifyContent: "space-between",
          }}
          className="d-flex d-lg-none gap-2"
          isPressable
          isHoverable
          onPress={() => window.open(resource.link, "_blank")}
        >
          <Card.Image style={{height: "100%", width: "100%", maxWidth: 300, maxHeight: 300,}} src={resource.imageSource}/>
          <div style={{flex: 1}} className="d-flex flex-column align-items-center justify-content-center">
            <div>
              <Text b>{resource.title}</Text>
              <Divider />
            </div>
            <Text>{resource.description}</Text>
          </div>
        </Card>
        <ModelEditButton small userCanEdit={userCanEditResources} data={resource} model={ExternalResource} setEditModalOpen={setModelEditModalOpen} setCurrentModel={setCurrentModel}/>
      </div>
    )
  }

  return (
  <div className="d-flex flex-column align-items-center justify-content-center">
    <ModelEditModal model={currentModel} open={modelEditModalOpen} setOpen={setModelEditModalOpen} />
    <WLBlockHeader text="Resources" color={blockHeaderFill} short />
    <section className="d-flex flex-column align-items-center justify-content-center m-5 w-80">
      <WLHeader firestoreId="resources-header" editable={userCanEditText}/>
      <WLText firestoreId="resources-description" editable={userCanEditText}/>
      {resources.map((r, i) => <ExternalResourceCard resource={r} key={i}/>)}
      <AddModelButton userCanEdit={userCanEditResources} model={ExternalResource} setEditModalOpen={setModelEditModalOpen} setCurrentModel={setCurrentModel} />
    </section>
    </div>
  )
}