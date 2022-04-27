"use strict";
exports.id = 794;
exports.ids = [794];
exports.modules = {

/***/ 794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_Gallery)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./helpers/GalleryData.js
const galleryData = [
    {
        src: "https://sionaugb.sirv.com/palmaservice/1%20Peter%20Pan%202005yr/1.jpg",
        alt: "Peter Pan 2005 - 01",
        width: "1024px",
        height: "768px"
    },
    {
        src: "https://sionaugb.sirv.com/palmaservice/1%20Peter%20Pan%202005yr/2.jpg",
        alt: "Peter Pan 2005 - 02",
        width: "1024px",
        height: "768px"
    },
    {
        src: "https://sionaugb.sirv.com/palmaservice/1%20Peter%20Pan%202005yr/3.jpg",
        alt: "Peter Pan 2005 - 03",
        width: "1024px",
        height: "768px"
    },
    {
        src: "https://sionaugb.sirv.com/palmaservice/1%20Peter%20Pan%202005yr/4.jpg",
        alt: "Peter Pan 2005 - 04",
        width: "640px",
        height: "500px"
    },
    {
        src: "https://sionaugb.sirv.com/palmaservice/1%20Peter%20Pan%202005yr/7.jpg",
        alt: "Peter Pan 2005 - 07",
        width: "768px",
        height: "600px"
    },
    {
        src: "https://sionaugb.sirv.com/palmaservice/1%20Peter%20Pan%202005yr/8.jpg",
        alt: "Peter Pan 2005 - 08",
        width: "1024px",
        height: "768px"
    },
    {
        src: "https://sionaugb.sirv.com/palmaservice/1%20Peter%20Pan%202005yr/9.jpg",
        alt: "Peter Pan 2005 - 09",
        width: "1024px",
        height: "768px"
    },
    {
        src: "https://sionaugb.sirv.com/palmaservice/1%20Peter%20Pan%202005yr/10.jpg",
        alt: "Peter Pan 2005 - 10",
        width: "1024px",
        height: "768px"
    },
    {
        src: "https://sionaugb.sirv.com/palmaservice/1%20Peter%20Pan%202005yr/11.jpg",
        alt: "Peter Pan 2005 - 11",
        width: "1024px",
        height: "768px"
    },
    {
        src: "https://sionaugb.sirv.com/palmaservice/1%20Peter%20Pan%202005yr/12.jpg",
        alt: "Peter Pan 2005 - 12",
        width: "1024px",
        height: "768px"
    },
    {
        src: "https://sionaugb.sirv.com/palmaservice/1%20Peter%20Pan%202005yr/13.jpg",
        alt: "Peter Pan 2005 - 13",
        width: "768px",
        height: "600px"
    },
    {
        src: "https://sionaugb.sirv.com/palmaservice/1%20Peter%20Pan%202005yr/14.jpg",
        alt: "Peter Pan 2005 - 14",
        width: "1024px",
        height: "768px"
    },
    {
        src: "https://sionaugb.sirv.com/palmaservice/1%20Peter%20Pan%202005yr/15.jpg",
        alt: "Peter Pan 2005 - 15",
        width: "1024px",
        height: "768px"
    },
    {
        src: "https://sionaugb.sirv.com/palmaservice/1%20Peter%20Pan%202005yr/16.jpg",
        alt: "Peter Pan 2005 - 16",
        width: "1024px",
        height: "768px"
    }
];

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(290);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(847);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./pages/components/Gallery.js






const Gallery = ()=>{
    const { 0: current , 1: setCurrent  } = (0,external_react_.useState)(0);
    const length = galleryData.length;
    const nextImg = ()=>{
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevImg = ()=>{
        setCurrent(current === 0 ? length - 1 : current - 1);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "gallery",
        className: "gallery-section wrapper",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "gallery-section__title-container",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ai_.AiFillCamera, {
                        className: "gallery-section__icon"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "gallery-section__title",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            children: "Gallery"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                className: "gallery-section__slider",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaArrowAltCircleLeft, {
                        className: "gallery-section__left-arrow",
                        onClick: prevImg
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(fa_.FaArrowAltCircleRight, {
                        className: "gallery-section__right-arrow",
                        onClick: nextImg
                    }),
                    galleryData.map((image, index)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: `gallery-section__slide ${index === current ? "gallery-section__slide--active" : ""}`,
                            children: index === current && /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: image.src,
                                alt: image.alt,
                                height: image.height,
                                width: image.width,
                                objectFit: "contain"
                            })
                        }, index);
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Gallery = (Gallery);


/***/ })

};
;