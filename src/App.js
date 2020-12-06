import logo from './logo.svg';
import './App.css';
import DemoFunctionComponents from './Components/DemoFunctionComponents';
import DemoReactClassComponents from './Components/DemoReactClassComponents';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import DataBinding from './DataBinding/DataBinding';
import DataBindingClassComponent from './DataBinding/DataBindingClassComponent';
import HandleEvent from './HandleEvent/HandleEvent';
import DemoState from './DemoState/DemoState';
import BaiTapChonXe from './DemoState/BaiTapChonXe/BaiTapChonXe';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import BaiTapRenderDanhSachPhim from './RenderWithMap/BaiTapRenderDanhSachPhim';
import DemoProps from './Props/DemoProps';
import ProductListRCC from './Props/ProductListRCC';
import index from './Props/PropsWithEvent';
import PropsWithEvent from './Props/PropsWithEvent';
import BaiTapGioHangRedux from './BaiTapRedux/BaiTapGioHangRedux/BaiTapGioHangRedux';
import BaiTapGamXucXac from './BaiTapRedux/BaiTapGameXucXac/BaiTapGamXucXac';

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout/> */}
      {/* <DataBinding/> */}
      {/* <DataBindingClassComponent/> */}
      {/* <HandleEvent></HandleEvent> */}
      {/* <DemoState/> */}
      {/* <BaiTapChonXe/> */}
      {/* <RenderWithMap/> */}
      {/* <BaiTapRenderDanhSachPhim/> */}
      {/* <div className = "hinhAnhPhim">fdjkf</div> */}
      {/* <DemoProps/> */}
      {/* <ProductListRCC/>*/}
      {/* <PropsWithEvent/> */}
      {/* <BaiTapGioHangRedux/> */}
      <BaiTapGamXucXac/>
    </div>
  );
}

export default App;
