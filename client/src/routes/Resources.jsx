import React, { useEffect, useState } from 'react'

import "../assets/style/services.css"
import { WLBlockHeader, WLHeader, WLText } from '../libraries/Web-Legos/components/Text';

import { blockHeaderFill } from "../assets/style/colors";
import { ExternalResource } from '../api/siteModels.ts';
import { ModelEditButton, ModelEditModal } from '../libraries/Web-Legos/components/Modals';
import { Card, Divider, Text } from '@nextui-org/react';
import { SiteModel } from '../libraries/Web-Legos/api/models.ts';

const userCanEditText = true;

export default function Resources() {
  
  const [resources, setResources] = useState([]);

  const [modelEditModalOpen, setModelEditModalOpen] = useState(false);
  const [currentModel, setCurrentModel] = useState(new SiteModel());

  useEffect(() => {
    setResources([ExternalResource.examples.default, ExternalResource.examples.alternate, ExternalResource.examples.default, ExternalResource.examples.alternate, ExternalResource.examples.default, ExternalResource.examples.alternate, ])
    //ExternalResource.getAndSet(setResources);
  }, [])

  function ExternalResourceCard({resource}) {
    return (
      <div className="w-100 p-2 d-flex flex-row align-items-center justify-content-center">
        <Card
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center", 
            justifyContent: "space-between"
          }}
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
        <ModelEditButton small userCanEdit={userCanEditText} data={resource} model={ExternalResource} setEditModalOpen={setModelEditModalOpen} setCurrentModel={setCurrentModel}/>
      </div>
    )
  }

  return (
  <div className="d-flex flex-column align-items-center">
    <ModelEditModal model={currentModel} open={modelEditModalOpen} setOpen={setModelEditModalOpen} />
    <WLBlockHeader text="Resources" color={blockHeaderFill} short />
    <section className="d-flex flex-column align-items-center justify-content-center m-5 w-80">
      <WLHeader firestoreId="resources-header" editable={userCanEditText}>
        Your Gardening Toolkit
      </WLHeader>
      <WLText firestoreId="resources-description" editable={userCanEditText}>
        Here, you'll find handpicked links to external tools and guides that can help enrich your gardening journey. From 
        plant care tips to design ideas, these resources are here to support and inspire you. Happy gardening!
      </WLText>
      {resources.map((r, i) => <ExternalResourceCard resource={r} key={i}/>)}
    </section>
    </div>
  )
}