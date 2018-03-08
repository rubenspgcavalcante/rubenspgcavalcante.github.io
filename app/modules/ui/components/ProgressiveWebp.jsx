import React from "react";

import AsyncComponent from "modules/core/components/AsyncComponent";
import ProgressiveImageLoader from "./ProgressiveImageLoader";

export default ({ importer, alt, className }) =>
  <AsyncComponent promise={importer}>{img =>
    <ProgressiveImageLoader alt={alt} className={className} image={img}/>
  }</AsyncComponent>