import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Board from "./components/Board/Board";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import useScroll from "./useScroll";

function App() {
  // const [imgData, setImgData] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const api =
  //       "https://api.unsplash.com/photos?page=1&client_id=S9SQdQkdkivrjI3k-7SrVhFqH_YF8wtM3Lm5u7DoFP8&per_page=17";

  //     const userData = await fetch(api, {
  //       method: "GET",
  //     });
  //     const userDataJson = await userData.json();
  //     setImgData(userDataJson);
  //   }
  //   fetchData();
  // }, []);

  // console.log(imgData[0].urls.raw);

  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [imgData, setImgData] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const scrollPosition = useScroll();

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: `https://api.unsplash.com/photos?page=${pageNumber}&client_id=S9SQdQkdkivrjI3k-7SrVhFqH_YF8wtM3Lm5u7DoFP8&per_page=17`,
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        console.log("res data ==> ", res.data);
        setImgData((p) => [...p, ...res.data]);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });

    return () => cancel();
  }, [pageNumber]);

  useEffect(() => {
    console.log(scrollPosition, window.innerHeight, document.body.offsetHeight);
    if (
      scrollPosition >=
      document.body.offsetHeight - window.innerHeight - 50
    ) {
      console.log("at bottom");
      setPageNumber(pageNumber + 1);
    }
  }, [scrollPosition]);

  return (
    <div className="app">
      {/* {scrollPosition} */}
      <Header />
      <Board
        imgData={imgData}
        setSelectedImage={setSelectedImage}
        setSelectedImageIndex={setSelectedImageIndex}
      />
      {selectedImage && (
        <Modal
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          selectedImageIndex={selectedImageIndex}
          setSelectedImageIndex={setSelectedImageIndex}
          imgData={imgData}
        />
      )}
    </div>
  );
}

export default App;
