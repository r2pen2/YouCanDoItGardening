import React, { useState } from 'react'

import "../assets/style/services.css"
import { WLBlockHeader } from '../libraries/Web-Legos/components/Text';

import { blockHeaderFill } from "../assets/style/colors";

export default function Teaching() {
  return (
  <div className="d-flex flex-column align-items-center">
    <WLBlockHeader text="Teaching" color={blockHeaderFill} />
      <section className="d-flex flex-column align-items-center justify-content-center m-5 w-80">
      </section>
    </div>
  )
}