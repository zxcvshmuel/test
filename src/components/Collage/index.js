import { useEffect, useRef, useState } from "react";
import "./Collage.css";
import logo from "../../images/logo.png";
import { useRecoilState } from "recoil";
import { numberOfStripToUseInStore } from "../recoil/root";
import Draggable from "react-draggable";
import { Resizable } from "re-resizable";
import { useReactToPrint } from "react-to-print";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import html2canvas from "html2canvas";

const handleSrcChange = (e, setItem) => {
  let url = URL.createObjectURL(e.target.files[0]);
  return setItem(() => url);
};
const LogoUploader = ({ handleSrcChange }) => {
  const [logosrc, setLogoSrc] = useState("");
  const [dim, setdim] = useState({
    width: 75,
    height: 75,
  });
  if (!logosrc) {
    return (
      <div
        style={{ minWidth: "150px" }}
        className="col-2 border rounded bg-light shadow-sm pointer handle m-auto center d-flex flex-column justify-content-center align-items-center position-absolute top-0 end-0"
      >
        <span onClick={() => setLogoSrc("nothing")}>X</span>
        <label for="formFileLg" className="form-label fs-5 mt-5 text-center">
          בחר ומקם לוגו
        </label>
        <input
          className="form-control form-control-lg"
          type="file"
          onChange={(e) => handleSrcChange(e, setLogoSrc)}
        />
      </div>
    );
  }
  if (logosrc === "nothing") {
    return null;
  }

  return (
    <Resizable
      size={{ width: dim.width, height: dim.height }}
      className="position-absolute"
      onResizeStop={(e, direction, ref, d) => {
        setdim({
          width: dim.width + d.width,
          height: dim.height + d.height,
        });
      }}
    >
      <img
        style={{ width: `${dim.width}px`, height: `${dim.height}px` }}
        src={logosrc}
        alt=""
      />
    </Resizable>
  );
};

const Uploader = ({ handleSrcChange }) => {
  const [src, setSrc] = useState("");

  if (!src) {
    return (
      <div className="col-12 handle m-auto center d-flex flex-column justify-content-center align-items-center">
        <label for="formFileLg" className="form-label fs-5 mt-5">
          בחר תמונה
        </label>
        <input
          className="form-control form-control-lg"
          type="file"
          onChange={(e) => handleSrcChange(e, setSrc)}
        />
      </div>
    );
  }
  return (
    <img
      className="previewImage"
      src={src}
      alt=""
      style={{ height: "100%", width: "100%" }}
    />
  );
};
const FirstLarge = () => {
  return (
    <div className="col-12 bg-light d-flex  flex-row flex-wrap rounded h-100 position-relative ok">
      <Draggable
        children={
          <div className="box">
            <LogoUploader
              handleSrcChange={handleSrcChange}
              key="asdknjalksdasdasddasdhafsdfsdfaasdasdsfjlkassdfsdfsdfndklasdk"
            />
          </div>
        }
      ></Draggable>
      <div className="col-6 border-end border-dark p-0 d-flex flex-row">
        {" "}
        <Uploader
          handleSrcChange={handleSrcChange}
          key="asdknjalksdasdasdasdhasdaddsfsjlkaassdfsdfsdfndklasdk"
        />
      </div>
      <div className="col-6 d-flex flex-column">
        <div className="col" style={{ height: "49.5%" }}>
          {" "}
          <Uploader
            handleSrcChange={handleSrcChange}
            key="asdknjalksdasdaasdasdsdasdgsdgsdgsdgsdhjlkasndklasdk"
          />
        </div>
        <div className="col border-top" style={{ height: "49.5%" }}>
          {" "}
          <Uploader
            handleSrcChange={handleSrcChange}
            key="asdknjsdsdsddsalksdasdaasdasdsdasdgsdgsdgsdgsdhjlkasndklasdk"
          />
        </div>
      </div>
    </div>
  );
};

const SecondLarge = ({ clickMethod }) => {
  return (
    <div className="col-12 bg-light d-flex  flex-row flex-wrap rounded h-100 position-relative ok">
      <Draggable
        children={
          <div className="box">
            <LogoUploader
              handleSrcChange={handleSrcChange}
              key="asdknjalksdasdasdasdasddasdhafsdfsdfaasdasdsfjlkassdfsdfsdfndklasdk"
            />
          </div>
        }
      ></Draggable>
      <div className="col border-end border-dark p-0 ">
        {" "}
        <Uploader
          handleSrcChange={handleSrcChange}
          key="asdknjalksdasdasdasdhasdaddsfsjlkaassdfsdfsdfndklasdk"
        />
      </div>
      <div className="col d-flex flex-column border-end border-dark p-0">
        <div className="col border-end border-dark p-0 ">
          {" "}
          <Uploader
            handleSrcChange={handleSrcChange}
            key="asdknjalksdasdasdasdhasdaddsfsjlkaassdfsdfsdfndklasdk"
          />
        </div>
        <div
          className="col border-top border-dark p-0 "
          style={{ height: "49.5%" }}
        >
          <Uploader
            handleSrcChange={handleSrcChange}
            key="asdknjalksdasdasdasdhasdaddsfsjlkaassdfsdfsdfndklasdk"
          />
        </div>
      </div>
      <div className="col border-dark p-0">
        {" "}
        <Uploader
          handleSrcChange={handleSrcChange}
          key="asdknjalksdasdasdasdhasdaddsfsjlkaassdfsdfsdfndklasdk"
        />
      </div>
    </div>
  );
};
const ThirdLarge = ({ clickMethod }) => {
  return (
    <div className="col-12 bg-light d-flex  flex-row flex-wrap rounded h-100 position-relative ok">
      <Draggable
        children={
          <div className="box">
            <LogoUploader
              handleSrcChange={handleSrcChange}
              key="asdknjalksdasasdasddasddasdhafsdfsdfaasdasdsfjlkassdfsdfsdfndklasdk"
            />
          </div>
        }
      ></Draggable>
      <div
        className="col-12 border-bottom border-dark p-0 d-flex flex-row p-0"
        style={{ height: "49.5%" }}
      >
        <div className="col border-end border-dark p-0">
          {" "}
          <Uploader
            handleSrcChange={handleSrcChange}
            key="asdknjalksdasdasdasdhjlkaassdfsdfsdfndklasdk"
          />
        </div>
        <div className="col">
          {" "}
          <Uploader
            handleSrcChange={handleSrcChange}
            key="asdknjalksdasdasdasdsdgfsdgsdasdhjlkasndklasdk"
          />
        </div>
      </div>
      <div className="col-12 d-flex flex-row h-50 p-0">
        <div className="col ">
          {" "}
          <Uploader
            handleSrcChange={handleSrcChange}
            key="asdknjalksdasdasdasdgsdgsdgsdgsdhjlkasndklasdk"
          />
        </div>
        <div className="col  border-start border-dark p-0">
          {" "}
          <Uploader
            handleSrcChange={handleSrcChange}
            key="asdknjalksdasdasdasdgsdgdgsdgsdgsdhjlkasndklasdk"
          />
        </div>
        <div className="col  border-start border-dark p-0">
          {" "}
          <Uploader
            handleSrcChange={handleSrcChange}
            key="asdknjalksdasdasdassdgdgsdgsgdsgddhjlkasndklasdk"
          />
        </div>
      </div>
    </div>
  );
};
const ForLarge = ({ clickMethod }) => {
  return (
    <div className="col-12 bg-light d-flex  flex-column rounded h-100 position-relative ok">
      <Draggable
        children={
          <div className="box">
            <LogoUploader
              handleSrcChange={handleSrcChange}
              key="asdknjalksdasasdasddasddasdhafsdfsdfaasdasdsfjlkassdfsdfsdfndklasdk"
            />
          </div>
        }
      ></Draggable>
      <div
        className="col border-bottom border-dark p-0 d-flex flex-row p-0"
        style={{ height: "49.5%" }}
      >
        <div className="col border-end border-dark p-0">
          {" "}
          <Uploader
            handleSrcChange={handleSrcChange}
            key="asdknjalksdasdassdgsdgsdgsddasdhjlkasndklasdk"
          />
        </div>
        <div className="col border-end border-dark p-0">
          {" "}
          <Uploader
            handleSrcChange={handleSrcChange}
            key="asdknjalksdasdsdgsdgsdgasdasdhjlkasndklasdk"
          />
        </div>
        <div className="col">
          {" "}
          <Uploader
            handleSrcChange={handleSrcChange}
            key="asdknjalksdasdsdgsdgsdgsdgasdasdhjlkasndklasdk"
          />
        </div>
      </div>
      <div
        className="col  border-bottom border-dark p-0 d-flex flex-row p-0"
        style={{ height: "49.5%" }}
      >
        <div className="col border-end border-dark p-0">
          {" "}
          <Uploader
            handleSrcChange={handleSrcChange}
            key="asdknjalksdasdsdgsdgsdgsgasdasdhjlkasndklasdk"
          />
        </div>
        <div className="col border-end border-dark p-0">
          {" "}
          <Uploader
            handleSrcChange={handleSrcChange}
            key="asdknjalksdsdgsdgsdgsdgsdgasdasdasdhjlkasndklasdk"
          />
        </div>
        <div className="col">
          {" "}
          <Uploader
            handleSrcChange={handleSrcChange}
            key="asdknjalksdasdgsdgsgdsdgsdasdasdhjlkasndklasdk"
          />
        </div>
      </div>
    </div>
  );
};
const FiveLarge = ({ clickMethod }) => {
  return (
    <div className="col-12 bg-light d-flex  flex-row rounded h-100 position-relative ok">
      <Draggable
        children={
          <div className="box">
            <LogoUploader
              handleSrcChange={handleSrcChange}
              key="asdknjalksdasdasdasdaasddasdhafsdfsdfaasdasdsfjlkassdfsdfsdfndklasdk"
            />
          </div>
        }
      ></Draggable>
      <div className="col-7 d-flex flex-column  border-end border-dark p-0 p-0">
        <div className="col h-50  border-bottom border-dark p-0 d-flex flex-row p-0">
          <div className="col border-end border-dark p-0">
            {" "}
            <Uploader
              handleSrcChange={handleSrcChange}
              key="asdknjalksdasdsdgsdgsdgsdasdasdhjlkasndklasdk"
            />
          </div>
          <div className="col">
            {" "}
            <Uploader
              handleSrcChange={handleSrcChange}
              key="asdknjalksdassdgsgsdgsddasdasdhjlkasndklasdk"
            />
          </div>
        </div>
        <div className="col h-50  border-bottom border-dark p-0 d-flex flex-row p-0">
          <div className="col border-end border-dark p-0">
            {" "}
            <Uploader
              handleSrcChange={handleSrcChange}
              key="asdknjalksdasdsdgsdgsdgasdasdhjlkasndklasdk"
            />
          </div>
          <div className="col">
            {" "}
            <Uploader
              handleSrcChange={handleSrcChange}
              key="asdknjalksdasdasgdsdgsdgsdgsdasdhjlkasndklasdk"
            />
          </div>
        </div>
      </div>
      <div className="col-5 d-flex flex-row p-0">
        {" "}
        <Uploader
          handleSrcChange={handleSrcChange}
          key="asdknjalksdasdasdgsdgsdgsdgsdasdhjlkasndklasdk"
        />
      </div>
    </div>
  );
};
const SixLarge = ({ clickMethod }) => {
  return (
    <div className="col-12 bg-light d-flex  flex-column rounded h-100 position-relative ok">
      <Draggable
        children={
          <div className="box">
            <LogoUploader
              handleSrcChange={handleSrcChange}
              key="asdknjalsadasdksdasdasddasdhafsdfsdfaasdasdsfjlkassdfsdfsdfndklasdk"
            />
          </div>
        }
      ></Draggable>
      <div className="col-12 h-50 border-bottom border-dark p-0 d-flex flex-row p-0">
        <div className="col border-end border-dark p-0">
          {" "}
          <Uploader
            handleSrcChange={handleSrcChange}
            key="asdknjalksdasdfdfdasdasdfgdfgdfhdfhdhjlkasndklasdk"
          />
        </div>
        <div className="col border-end border-dark p-0">
          {" "}
          <Uploader
            handleSrcChange={handleSrcChange}
            key="asdknjalksdasdfdfdasdadfhdfhdfhdfhsdhjlkasndklasdk"
          />
        </div>
        <div className="col border-end border-dark p-0">
          {" "}
          <Uploader
            handleSrcChange={handleSrcChange}
            key="asdknjalksdadddsdasdfhdfhdfhdfhdasdhjlkasndklasdk"
          />
        </div>
        <div className="col border-end border-dark p-0">
          {" "}
          <Uploader
            handleSrcChange={handleSrcChange}
            key="asdknjalksdasdasddfhdfhdfdfddhdfhasdhjlkasndklasdk"
          />
        </div>
        <div className="col border-end border-dark p-0">
          {" "}
          <Uploader
            handleSrcChange={handleSrcChange}
            key="asdknjalksdasdadfdfsddhfdfhdfhdfhdfhasdhjlkasndklasdk"
          />
        </div>
      </div>
      <div className="col-12 h-50 border-bottom d-flex flex-row p-0">
        <div className="col border-end border-dark p-0">
          {" "}
          <Uploader
            handleSrcChange={handleSrcChange}
            key="asdknjalksdasdasdasdfgdfgdfhdfhdhjlkasndklasdk"
          />
        </div>
        <div className="col border-end border-dark p-0">
          {" "}
          <Uploader
            handleSrcChange={handleSrcChange}
            key="asdknjalksdasdasdadfhdfhdfhdfhsdhjlkasndklasdk"
          />
        </div>
        <div className="col border-end border-dark p-0">
          {" "}
          <Uploader
            handleSrcChange={handleSrcChange}
            key="asdknjalksdasdasdfhdfhdfhdfhdasdhjlkasndklasdk"
          />
        </div>
        <div className="col border-end border-dark p-0">
          {" "}
          <Uploader
            handleSrcChange={handleSrcChange}
            key="asdknjalksdasdasddfhdfhdfhdfhasdhjlkasndklasdk"
          />
        </div>
        <div className="col border-end border-dark p-0">
          {" "}
          <Uploader
            handleSrcChange={handleSrcChange}
            key="asdknjalksdasdasddhfdfhdfhdfhdfhasdhjlkasndklasdk"
          />
        </div>
      </div>
    </div>
  );
};
const EightLarge = () => {
  return (
    <div className="col-12 bg-light d-flex  flex-row flex-wrap rounded h-100 position-relative ok">
      <Draggable
        children={
          <div className="box">
            <LogoUploader
              handleSrcChange={handleSrcChange}
              key="asdknjalksdaasdasdasdsdasddasdhafsdfsdfaasdasdsfjlkassdfsdfsdfndklasdk"
            />
          </div>
        }
      ></Draggable>
      <div className="col-12 d-flex flex-row h-50 p-0">
        <div className="col ">
          {" "}
          <Uploader
            handleSrcChange={handleSrcChange}
            key="asdknjalksdasdasdasdgasdasdsdgsdgsdgsdhjlkasndklasdk"
          />
        </div>
        <div className="col  border-start border-dark p-0">
          {" "}
          <Uploader
            handleSrcChange={handleSrcChange}
            key="asdknjalksdasdasdasdgasdasdsdgdgsdgsdgsdhjlkasndklasdk"
          />
        </div>
        <div className="col  border-start border-dark p-0">
          {" "}
          <Uploader
            handleSrcChange={handleSrcChange}
            key="asdknjalksdasdasdasdasdassdgdgsdgsgdsgddhjlkasndklasdk"
          />
        </div>
      </div>
      <div
        className="col-12 border-top border-dark p-0 d-flex flex-row p-0"
        style={{ height: "49.5%" }}
      >
        <div className="col border-end border-dark p-0">
          {" "}
          <Uploader
            handleSrcChange={handleSrcChange}
            key="asdknjalksdasdasasdasddasdhjlkaassdfsdfsdfndklasdk"
          />
        </div>
        <div className="col">
          {" "}
          <Uploader
            handleSrcChange={handleSrcChange}
            key="asdknjalksdasdasdaasdasdsdsdgfsdgsdasdhjlkasndklasdk"
          />
        </div>
      </div>
    </div>
  );
};
const Eight = ({ clickMethod }) => {
  return (
    <div
      onClick={() => clickMethod("eight")}
      className="item pointer col-xxl-2 col-xl-2 col-lg-3 col-mg-5 col-sm-5 col-5 bg-light d-flex flex-column m-2 rounded"
      style={{ minHeight: "150px" }}
    >
      <div className="col-12 d-flex flex-row h-50">
        <div className="col "></div>
        <div className="col  border-start border-dark p-0 shadow-sm"></div>
        <div className="col  border-start border-dark p-0 shadow-sm"></div>
      </div>
      <div className="col-12 h-50  border-top border-dark p-0 shadow-sm d-flex flex-row">
        <div className="col border-end border-dark p-0 shadow-sm"></div>
        <div className="col"></div>
      </div>
    </div>
  );
};
const First = ({ clickMethod }) => {
  return (
    <div
      onClick={() => clickMethod("first")}
      className="item pointer col-xxl-2 col-xl-2 col-lg-3 col-mg-5 col-sm-5 col-5 bg-light d-flex flex-row m-2 rounded"
      style={{ minHeight: "150px" }}
    >
      <div className="col bg-light border-end border-dark p-0 shadow-sm"></div>
      <div className="col d-flex flex-column bg-light border-end border-dark p-0 shadow-sm">
        <div className="col border-bottom border-dark h-50"></div>
        <div className="col border-end h-50"></div>
      </div>
    </div>
  );
};

const Second = ({ clickMethod }) => {
  return (
    <div
      onClick={() => clickMethod("second")}
      className="item pointer col-xxl-2 col-xl-2 col-lg-3 col-mg-5 col-sm-5 col-5 bg-light d-flex flex-row m-2 rounded"
      style={{ minHeight: "150px" }}
    >
      <div className="col border-start border-dark p-0 shadow-sm"></div>
      <div className="col border-start border-dark p-0 shadow-sm d-flex flex-column">
        <div className="col "></div>
        <div className="col border-top border-dark "></div>
      </div>
      <div className="col border-start border-dark p-0 shadow-sm"></div>
    </div>
  );
};
const Third = ({ clickMethod }) => {
  return (
    <div
      onClick={() => clickMethod("third")}
      className="item pointer col-xxl-2 col-xl-2 col-lg-3 col-mg-5 col-sm-5 col-5 bg-light d-flex flex-column m-2 rounded"
      style={{ minHeight: "150px" }}
    >
      <div className="col-12 h-50  border-bottom border-dark p-0 shadow-sm d-flex flex-row">
        <div className="col border-end border-dark p-0 shadow-sm"></div>
        <div className="col"></div>
      </div>
      <div className="col-12 d-flex flex-row h-50">
        <div className="col "></div>
        <div className="col  border-start border-dark p-0 shadow-sm"></div>
        <div className="col  border-start border-dark p-0 shadow-sm"></div>
      </div>
    </div>
  );
};
const For = ({ clickMethod }) => {
  return (
    <div
      onClick={() => clickMethod("for")}
      className="item pointer col-xxl-2 col-xl-2 col-lg-3 col-mg-5 col-sm-5 col-5 bg-light d-flex flex-column m-2 rounded"
      style={{ minHeight: "150px" }}
    >
      <div className="col h-50  border-bottom border-dark p-0 shadow-sm d-flex flex-row">
        <div className="col border-end border-dark p-0 shadow-sm"></div>
        <div className="col border-end border-dark p-0 shadow-sm"></div>
        <div className="col"></div>
      </div>
      <div className="col h-50  border-bottom border-dark p-0 shadow-sm d-flex flex-row">
        <div className="col border-end border-dark p-0 shadow-sm"></div>
        <div className="col border-end border-dark p-0 shadow-sm"></div>
        <div className="col"></div>
      </div>
    </div>
  );
};
const Five = ({ clickMethod }) => {
  return (
    <div
      onClick={() => clickMethod("five")}
      className="item pointer col-xxl-2 col-xl-2 col-lg-3 col-mg-5 col-sm-5 col-5 bg-light d-flex flex-row m-2 rounded"
      style={{ minHeight: "150px" }}
    >
      <div className="col-7 d-flex flex-column  border-end border-dark p-0 shadow-sm">
        <div className="col h-50  border-bottom border-dark p-0 shadow-sm d-flex flex-row">
          <div className="col border-end border-dark p-0 shadow-sm"></div>
          <div className="col"></div>
        </div>
        <div className="col h-50  border-bottom border-dark p-0 shadow-sm d-flex flex-row">
          <div className="col border-end border-dark p-0 shadow-sm"></div>
          <div className="col"></div>
        </div>
      </div>
      <div className="col-5 d-flex flex-row">
        <div className="col"></div>
      </div>
    </div>
  );
};
const Six = ({ clickMethod }) => {
  return (
    <div
      onClick={() => clickMethod("six")}
      className="item pointer col-xxl-2 col-xl-2 col-lg-3 col-mg-5 col-sm-5 col-5 bg-light d-flex flex-column m-2 rounded"
      style={{ minHeight: "150px" }}
    >
      <div className="col-12 h-50 border-bottom border-dark p-0 shadow-sm d-flex flex-row">
        <div className="col border-end border-dark p-0 shadow-sm"></div>
        <div className="col border-end border-dark p-0 shadow-sm"></div>
        <div className="col border-end border-dark p-0 shadow-sm"></div>
        <div className="col border-end border-dark p-0 shadow-sm"></div>
        <div className="col border-end border-dark p-0 shadow-sm"></div>
      </div>
      <div className="col-12 h-50 border-bottom d-flex flex-row">
        <div className="col border-end border-dark p-0 shadow-sm"></div>
        <div className="col border-end border-dark p-0 shadow-sm"></div>
        <div className="col border-end border-dark p-0 shadow-sm"></div>
        <div className="col border-end border-dark p-0 shadow-sm"></div>
        <div className="col border-end border-dark p-0 shadow-sm"></div>
      </div>
    </div>
  );
};
const SelectedTemplate = ({ view }) => {
  if (!view) {
    return (
      <div className="fs-3  m-auto text-center text-white d-flex flex-column justify-content-center align-items-center ">
        אפשר לבחור תבנית ולהתחיל ליצור
        <img src={logo} height="250" width="250" alt="" />
      </div>
    );
  }
  if (view === "first") {
    return (
      <div id="stage">
        <FirstLarge />
      </div>
    );
  }
  if (view === "second") {
    return (
      <div id="stage">
        <SecondLarge />
      </div>
    );
  }
  if (view === "third") {
    return (
      <div id="stage">
        <ThirdLarge />
      </div>
    );
  }
  if (view === "for") {
    return (
      <div id="stage">
        <ForLarge />
      </div>
    );
  }
  if (view === "five") {
    return (
      <div id="stage">
        <FiveLarge />
      </div>
    );
  }
  if (view === "six") {
    return (
      <div id="stage">
        <SixLarge />
      </div>
    );
  }
  if (view === "eight") {
    return (
      <div id="stage">
        <EightLarge />
      </div>
    );
  }
};

const PrintButton = ({ view, printRef, funcy }) => {
  const func = () => {
    funcy(true);
  };
  if (!view) {
    return null;
  }
  return (
    <div
      className="btn border btn-light col-2 m-auto align-self-center m-2"
      onClick={() => func()}
      id="printBtn"
      style={{
        flex:1
      }}
    >
      הדפס
    </div>
  );
};
const DownloadButton = ({ view, printRef, funcy, handleDownload }) => {
  const func = () => {
    funcy(true);
  };
  if (!view) {
    return null;
  }
  return (
    <div
      className="btn border btn-light col-2 m-auto align-self-center m-2"
      onClick={() => handleDownload()}
      id="printBtn"
      style={{
        flex:1
      }}
    >
      הורד
    </div>
  );
};
const Collage = () => {
  const [view, setView] = useState("");
  const [stripsRemaining, setStripsRemaining] = useRecoilState(
    numberOfStripToUseInStore
  );
  const [submit, setSubmit] = useState(false);

  const printRef = useRef(null);
  const handleView = (value) => {
    return setView(() => value);
  };
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: "strip",
    // onBeforeGetContent: handleOnBeforeGetContent,
    // onBeforePrint: handleBeforePrint,
    // removeAfterPrint: true,
  });
  const handleDownload = () => {
    //
    const element = document.getElementById("stage");
    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const img = new Image();
      img.src = imgData;
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "collage.png";
      link.click();
    });
  };

  useEffect(() => {
    const getProfileDetails = async (localAuthId) => {
      const docRef = doc(db, "users", localAuthId);

      const docSnap = await getDoc(docRef);

      setStripsRemaining(docSnap.data()?.leftStrips);

      return docSnap.data();
    };
    getProfileDetails(auth?.currentUser?.reloadUserInfo?.localId);
  }, []); //eslint-disable-line

  useEffect(() => {
    if (submit) {
      if (stripsRemaining < 1) {
        alert("מכסת סטריפים הגיעה לסופה יש ליצור קשר עם מנהל מערכת");
        return;
      }
      handlePrint();
      setStripsRemaining(stripsRemaining - 1);
      setSubmit(false);
    }
  }, [submit]); //eslint-disable-line

  const stageRef = useRef();

  return (
    <div className="col-12 d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex flex-column align-self-center m-2" id="strips">
        <span
          style={{
            color:
              parseInt(stripsRemaining) > 100
                ? "lightgreen"
                : parseInt(stripsRemaining) > 30
                ? "orange"
                : "red",
          }}
        >
          <b>{stripsRemaining}</b>
        </span>
      </div>
      <div
        className="collagerRow col-12 d-flex flex-row border border-2 rounded border-white p-2"
        id="previewBar"
        ref={stageRef}
      >
        <First clickMethod={handleView} />
        <Second clickMethod={handleView} />
        <Third clickMethod={handleView} />
        <For clickMethod={handleView} />
        <Five clickMethod={handleView} />
        <Six clickMethod={handleView} />
        <Eight clickMethod={handleView} />
      </div>

      <div
        className="container p-0 d-flex flex-column justify-content-center align-items-center"
        id="divCon"
        ref={printRef}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PrintButton view={view} printRef={printRef} funcy={setSubmit} />
          <DownloadButton
            view={view}
            printRef={stageRef}
            funcy={setSubmit}
            handleDownload={handleDownload}
          />
        </div>

        <SelectedTemplate view={view} />
      </div>
    </div>
  );
};

export default Collage;
