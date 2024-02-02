// // import './App.css';

// import ResizableComponent1 from "./component/resizableComponent1";
// import ResizableComponent2 from "./component/resizableComponent2";
// import ResizableComponent3 from "./component/resizableComponent3";


// function App() {
//   return (
//     <div>
//       <ResizableComponent1 />
//       <ResizableComponent2 />
//       <ResizableComponent3 />
//       {/* <ResizableComponent />
//       <ResizableComponent /> */}
//     </div>

//   )
// }

// export default App;


// src/App.jsx
import React from 'react';
import { WidthProvider, Responsive } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './styles/resizable.css';
import ResizableComponent1 from './component/resizableComponent1';
import ResizableComponent2 from './component/resizableComponent2';
import ResizableComponent3 from './component/resizableComponent3';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const App = () => {
  const components = [
    <ResizableComponent1 key="1" />,
    <ResizableComponent2 key="2" />,
    <ResizableComponent3 key="3" />,
  ];

  const layouts = {
    lg: [
      { i: '1', component: components[0], x: 0, y: 0, w: 4, h: 3 },
      { i: '2', component: components[1], x: 4, y: 0, w: 4, h: 3 },
      { i: '3', component: components[2], x: 8, y: 0, w: 4, h: 3 },
    ],
  };

  const onResize = (layout, oldItem, newItem) => {
    // setLayout((prevLayouts) => {
    //   const newLayouts = { ...prevLayouts };
    //   newLayouts.lg = newLayouts.lg.map((item) =>
    //     item.i === newItem.i ? { ...item, w: newItem.w, h: newItem.h } : item
    //   );
    //   return newLayouts;
    // });
  };

  return (
<ResponsiveReactGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={100}
      onResize={onResize}
      isResizable
    >
      {layouts.lg.map((layout) => (
        <div key={layout.i}>{layout.component}</div>
      ))}
    </ResponsiveReactGridLayout>
  );
};

export default App;

