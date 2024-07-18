import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels';
import { DragHandleDots2Icon } from '@radix-ui/react-icons';

import { Page } from '../../components/page';

export const Resizable = () => {
  return (
    <Page withHeader className="flex justify-center py-2">
      <div className="container border-4 border-blue-500">
        <PanelGroup direction="horizontal">
          <div className="bg-slate-600 p-5">side-bar</div>
          <Panel collapsible={true} collapsedSize={10} minSize={20}>
            <div className="bg-red-400 h-full p-5">source</div>
          </Panel>
          <PanelResizeHandle className="flex w-px items-center justify-center bg-blue-600">
            <div className="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-blue-600">
              <DragHandleDots2Icon className="h-2.5 w-2.5" />
            </div>
          </PanelResizeHandle>
          <Panel minSize={20}>
            <div className="bg-yellow-200 h-full p-5">viewer</div>
          </Panel>
        </PanelGroup>
      </div>
    </Page>
  );
};
