/*
 * Copyright 2018-2021 Elyra Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { useCallback, useEffect, useState } from "react";

import { PipelineEditor } from "@elyra/pipeline-editor";

import nodes from "../nodes";
import pipeline from "../pipeline";

import "./index.css";

function VSCode() {
  useEffect(() => {
    document.body.classList.add("pipeline-editor-vscode");
    return () => {
      document.body.classList.remove("pipeline-editor-vscode");
    };
  }, []);

  const [panelOpen, setPanelOpen] = useState(false);

  const onAction = useCallback(
    (type: string) => {
      switch (type) {
        case "properties":
          setPanelOpen(true);
          break;
        case "togglePanelOpen":
          setPanelOpen(!panelOpen);
          break;
        case "closePanel":
          setPanelOpen(false);
          break;
      }
    },
    [panelOpen]
  );

  return (
    <div style={{ height: "100vh" }}>
      <PipelineEditor
        nodes={nodes}
        pipeline={pipeline}
        panelOpen={panelOpen}
        onAction={onAction}
      >
        <div>Hello there</div>
      </PipelineEditor>
    </div>
  );
}

export default VSCode;
