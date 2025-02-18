(()=>{var n={639:(n,t,e)=>{"use strict";e.d(t,{A:()=>i});var r=e(354),o=e.n(r),A=e(314),a=e.n(A)()(o());a.push([n.id,'.boardSetup {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tborder-radius: 5px;\n\tbackground-color: rgb(0, 0, 0, 0.7);\n\tcolor: white;\n\tpadding: 20px;\n}\n\n.boardSetup .playerName {\n\tcolor: rgb(243, 173, 51);\n}\n\n.boardSetup .playerName.second {\n\tcolor: rgb(77, 112, 208);\n}\n\n.boardSetup > h1,\nh2 {\n\tmargin: 0;\n\tpadding: 10px 5px;\n\tfont-family: "RumFont";\n}\n\n.setupContainer {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 20px;\n}\n\n.dashboard {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 30px;\n\tpadding: 20px;\n}\n\n.dashboard p {\n\tmargin: 0;\n\tpadding: 0;\n}\n\n.ships {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 10px;\n}\n\n#remainingShips,\n#shipSizeValue {\n\theight: 20px;\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 2px;\n}\n\n#remainingShips img,\n#shipSizeValue img {\n\twidth: 20px;\n\theight: 20px;\n}\n\n.size {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 5px;\n}\n\n.orientationSection {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 5px;\n}\n\n.orientation {\n\tbackground-color: rgb(77, 112, 208);\n\tborder-radius: 5px;\n\twidth: 30px;\n}\n\n.orientation:hover {\n\tcursor: pointer;\n\tbackground-color: rgb(77, 112, 208, 0.8);\n}\n\n.dashboardBtns {\n\tdisplay: flex;\n\tjustify-content: center;\n\tgap: 10px;\n}\n\n.dashboardBtns button {\n\tpadding: 10px;\n\tborder-radius: 5px;\n\tborder: none;\n\tcolor: white;\n\tcursor: pointer;\n}\n\n.dashboardBtns button:hover {\n\topacity: 0.8;\n}\n\n.dashboardBtns button.deployBtn {\n\tbackground-color: #de5718;\n}\n\n.dashboard button.disabled {\n\tcolor: #373737;\n\tbackground-color: #ccc;\n\tcursor: not-allowed;\n}\n\n.dashboard button.disabled:hover {\n\topacity: 1;\n}\n\n.dashboardBtns button.clearBtn {\n\tbackground-color: #4e4880;\n}\n\n.dashboard .errorMsg {\n\theight: 20px;\n\tcolor: red;\n}\n\n.loader-container {\n\tposition: fixed;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 10px;\n\tpadding: 50px;\n\tborder-radius: 5px;\n\tbackground-color: rgb(0, 0, 0, 0.7);\n\tcolor: white;\n\tfont-weight: bold;\n}\n\n.loader {\n\tborder: 20px white solid;\n\tborder-top: 20px solid rgb(51, 51, 117);\n\tborder-radius: 50%;\n\twidth: 100px;\n\theight: 100px;\n\tanimation: spin 2s linear infinite;\n}\n\n@keyframes spin {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n',"",{version:3,sources:["webpack://./src/css/board.css"],names:[],mappings:"AAAA;CACC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,kBAAkB;CAClB,mCAAmC;CACnC,YAAY;CACZ,aAAa;AACd;;AAEA;CACC,wBAAwB;AACzB;;AAEA;CACC,wBAAwB;AACzB;;AAEA;;CAEC,SAAS;CACT,iBAAiB;CACjB,sBAAsB;AACvB;;AAEA;CACC,aAAa;CACb,mBAAmB;CACnB,SAAS;AACV;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,SAAS;CACT,aAAa;AACd;;AAEA;CACC,SAAS;CACT,UAAU;AACX;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,SAAS;AACV;;AAEA;;CAEC,YAAY;CACZ,aAAa;CACb,mBAAmB;CACnB,QAAQ;AACT;;AAEA;;CAEC,WAAW;CACX,YAAY;AACb;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,QAAQ;AACT;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,QAAQ;AACT;;AAEA;CACC,mCAAmC;CACnC,kBAAkB;CAClB,WAAW;AACZ;;AAEA;CACC,eAAe;CACf,wCAAwC;AACzC;;AAEA;CACC,aAAa;CACb,uBAAuB;CACvB,SAAS;AACV;;AAEA;CACC,aAAa;CACb,kBAAkB;CAClB,YAAY;CACZ,YAAY;CACZ,eAAe;AAChB;;AAEA;CACC,YAAY;AACb;;AAEA;CACC,yBAAyB;AAC1B;;AAEA;CACC,cAAc;CACd,sBAAsB;CACtB,mBAAmB;AACpB;;AAEA;CACC,UAAU;AACX;;AAEA;CACC,yBAAyB;AAC1B;;AAEA;CACC,YAAY;CACZ,UAAU;AACX;;AAEA;CACC,eAAe;CACf,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,SAAS;CACT,aAAa;CACb,kBAAkB;CAClB,mCAAmC;CACnC,YAAY;CACZ,iBAAiB;AAClB;;AAEA;CACC,wBAAwB;CACxB,uCAAuC;CACvC,kBAAkB;CAClB,YAAY;CACZ,aAAa;CACb,kCAAkC;AACnC;;AAEA;CACC;EACC,uBAAuB;CACxB;CACA;EACC,yBAAyB;CAC1B;AACD",sourcesContent:['.boardSetup {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tborder-radius: 5px;\n\tbackground-color: rgb(0, 0, 0, 0.7);\n\tcolor: white;\n\tpadding: 20px;\n}\n\n.boardSetup .playerName {\n\tcolor: rgb(243, 173, 51);\n}\n\n.boardSetup .playerName.second {\n\tcolor: rgb(77, 112, 208);\n}\n\n.boardSetup > h1,\nh2 {\n\tmargin: 0;\n\tpadding: 10px 5px;\n\tfont-family: "RumFont";\n}\n\n.setupContainer {\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 20px;\n}\n\n.dashboard {\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 30px;\n\tpadding: 20px;\n}\n\n.dashboard p {\n\tmargin: 0;\n\tpadding: 0;\n}\n\n.ships {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 10px;\n}\n\n#remainingShips,\n#shipSizeValue {\n\theight: 20px;\n\tdisplay: flex;\n\talign-items: center;\n\tgap: 2px;\n}\n\n#remainingShips img,\n#shipSizeValue img {\n\twidth: 20px;\n\theight: 20px;\n}\n\n.size {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 5px;\n}\n\n.orientationSection {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 5px;\n}\n\n.orientation {\n\tbackground-color: rgb(77, 112, 208);\n\tborder-radius: 5px;\n\twidth: 30px;\n}\n\n.orientation:hover {\n\tcursor: pointer;\n\tbackground-color: rgb(77, 112, 208, 0.8);\n}\n\n.dashboardBtns {\n\tdisplay: flex;\n\tjustify-content: center;\n\tgap: 10px;\n}\n\n.dashboardBtns button {\n\tpadding: 10px;\n\tborder-radius: 5px;\n\tborder: none;\n\tcolor: white;\n\tcursor: pointer;\n}\n\n.dashboardBtns button:hover {\n\topacity: 0.8;\n}\n\n.dashboardBtns button.deployBtn {\n\tbackground-color: #de5718;\n}\n\n.dashboard button.disabled {\n\tcolor: #373737;\n\tbackground-color: #ccc;\n\tcursor: not-allowed;\n}\n\n.dashboard button.disabled:hover {\n\topacity: 1;\n}\n\n.dashboardBtns button.clearBtn {\n\tbackground-color: #4e4880;\n}\n\n.dashboard .errorMsg {\n\theight: 20px;\n\tcolor: red;\n}\n\n.loader-container {\n\tposition: fixed;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 10px;\n\tpadding: 50px;\n\tborder-radius: 5px;\n\tbackground-color: rgb(0, 0, 0, 0.7);\n\tcolor: white;\n\tfont-weight: bold;\n}\n\n.loader {\n\tborder: 20px white solid;\n\tborder-top: 20px solid rgb(51, 51, 117);\n\tborder-radius: 50%;\n\twidth: 100px;\n\theight: 100px;\n\tanimation: spin 2s linear infinite;\n}\n\n@keyframes spin {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n'],sourceRoot:""}]);const i=a},373:(n,t,e)=>{"use strict";e.d(t,{A:()=>i});var r=e(354),o=e.n(r),A=e(314),a=e.n(A)()(o());a.push([n.id,".game {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tborder-radius: 5px;\n\tgap: 20px;\n\tbackground-color: rgb(0, 0, 0, 0.5);\n\tcolor: white;\n\tpadding: 20px;\n}\n\n.game > h1 {\n\tmargin: 0;\n\tcolor: rgb(234, 12, 49);\n}\n\n.gameState {\n\tmargin-bottom: 5px;\n}\n\n.gameState > span {\n\tcolor: rgb(243, 173, 51);\n}\n\n.gameState > span.second {\n\tcolor: rgb(77, 112, 208);\n}\n\n.p1Name {\n\tcolor: rgb(243, 173, 51);\n}\n\n.p2Name {\n\tcolor: rgb(77, 112, 208);\n}\n\n.playersContainer {\n\tdisplay: flex;\n\tgap: 10px;\n\talign-items: center;\n}\n\n.player1,\n.player2 {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 10px;\n}\n\n.playAgainBtn {\n\tbackground-color: #4caf50;\n\tcolor: white;\n\tborder: none;\n\tborder-radius: 5px;\n\tpadding: 10px 20px;\n\tcursor: pointer;\n}\n","",{version:3,sources:["webpack://./src/css/game.css"],names:[],mappings:"AAAA;CACC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,kBAAkB;CAClB,SAAS;CACT,mCAAmC;CACnC,YAAY;CACZ,aAAa;AACd;;AAEA;CACC,SAAS;CACT,uBAAuB;AACxB;;AAEA;CACC,kBAAkB;AACnB;;AAEA;CACC,wBAAwB;AACzB;;AAEA;CACC,wBAAwB;AACzB;;AAEA;CACC,wBAAwB;AACzB;;AAEA;CACC,wBAAwB;AACzB;;AAEA;CACC,aAAa;CACb,SAAS;CACT,mBAAmB;AACpB;;AAEA;;CAEC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,SAAS;AACV;;AAEA;CACC,yBAAyB;CACzB,YAAY;CACZ,YAAY;CACZ,kBAAkB;CAClB,kBAAkB;CAClB,eAAe;AAChB",sourcesContent:[".game {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tborder-radius: 5px;\n\tgap: 20px;\n\tbackground-color: rgb(0, 0, 0, 0.5);\n\tcolor: white;\n\tpadding: 20px;\n}\n\n.game > h1 {\n\tmargin: 0;\n\tcolor: rgb(234, 12, 49);\n}\n\n.gameState {\n\tmargin-bottom: 5px;\n}\n\n.gameState > span {\n\tcolor: rgb(243, 173, 51);\n}\n\n.gameState > span.second {\n\tcolor: rgb(77, 112, 208);\n}\n\n.p1Name {\n\tcolor: rgb(243, 173, 51);\n}\n\n.p2Name {\n\tcolor: rgb(77, 112, 208);\n}\n\n.playersContainer {\n\tdisplay: flex;\n\tgap: 10px;\n\talign-items: center;\n}\n\n.player1,\n.player2 {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 10px;\n}\n\n.playAgainBtn {\n\tbackground-color: #4caf50;\n\tcolor: white;\n\tborder: none;\n\tborder-radius: 5px;\n\tpadding: 10px 20px;\n\tcursor: pointer;\n}\n"],sourceRoot:""}]);const i=a},944:(n,t,e)=>{"use strict";e.d(t,{A:()=>u});var r=e(354),o=e.n(r),A=e(314),a=e.n(A),i=e(417),s=e.n(i),c=new URL(e(821),e.b),d=new URL(e(25),e.b),l=a()(o()),C=s()(c),p=s()(d);l.push([n.id,`@font-face {\n\tfont-family: "RumFont";\n\tsrc: url(${C});\n}\n\n* {\n\tfont-family: "RumFont";\n}\n\nhtml,\nbody {\n\theight: 100%;\n\twidth: 100%;\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: "Roboto", serif;\n}\n\nbody {\n\tbackground-image: url(${p});\n\tbackground-size: cover;\n\tbackground-color: rgba(0, 0, 0, 0.4);\n\tbackground-blend-mode: darken;\n}\n\n.header {\n\theight: 10vh;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tcolor: #bfdbfe;\n}\n\n.header > img {\n\theight: 80%;\n}\n\n.header > .logoText {\n\tfont-family: "RumFont";\n\tfont-size: 20px;\n}\n\nbutton.rules {\n\tposition: absolute;\n\ttop: 20px;\n\tright: 20px;\n\tbackground-color: #fbfbfbbc;\n\tborder: none;\n\tborder-radius: 5px;\n\tpadding: 5px;\n\tcursor: pointer;\n}\n\ndialog {\n\twidth: 50%;\n\theight: 70%;\n\tbackground-color: #fbfbfb;\n\tborder-radius: 5px;\n\tpadding: 10px 20px;\n\tborder: none;\n}\n\ndialog > div {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n}\n\ndialog p {\n\talign-self: flex-start;\n\tfont-family: "Roboto", serif;\n\tfont-size: 20px;\n\tfont-weight: bold;\n}\n\n.closeDialog {\n\tposition: sticky;\n\ttop: 10px;\n\tright: 10px;\n\twidth: 40px;\n\tcursor: pointer;\n\topacity: 0.5;\n}\n\n.closeDialog:hover {\n\topacity: 1;\n}\n\n.gameContainer {\n\theight: 90vh;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.board {\n\tmin-width: 360px;\n\twidth: 360px;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n}\n\n.rowNbr {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 31.5px;\n\theight: 30px;\n}\n\n.columnNbr {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 31.5px;\n\theight: 30px;\n}\n\n.cell {\n\twidth: 30px;\n\theight: 30px;\n\tborder: 1px solid white;\n}\n\n.cell.active:hover {\n\tcursor: pointer;\n\tbackground-color: rgba(255, 255, 255, 0.3);\n}\n\n.cell > img {\n\twidth: 100%;\n\theight: 100%;\n}\n\n#hidden {\n\tdisplay: none;\n}\n`,"",{version:3,sources:["webpack://./src/css/main.css"],names:[],mappings:"AAAA;CACC,sBAAsB;CACtB,4CAAiC;AAClC;;AAEA;CACC,sBAAsB;AACvB;;AAEA;;CAEC,YAAY;CACZ,WAAW;CACX,SAAS;CACT,UAAU;CACV,4BAA4B;AAC7B;;AAEA;CACC,yDAAiD;CACjD,sBAAsB;CACtB,oCAAoC;CACpC,6BAA6B;AAC9B;;AAEA;CACC,YAAY;CACZ,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,cAAc;AACf;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,sBAAsB;CACtB,eAAe;AAChB;;AAEA;CACC,kBAAkB;CAClB,SAAS;CACT,WAAW;CACX,2BAA2B;CAC3B,YAAY;CACZ,kBAAkB;CAClB,YAAY;CACZ,eAAe;AAChB;;AAEA;CACC,UAAU;CACV,WAAW;CACX,yBAAyB;CACzB,kBAAkB;CAClB,kBAAkB;CAClB,YAAY;AACb;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;AACpB;;AAEA;CACC,sBAAsB;CACtB,4BAA4B;CAC5B,eAAe;CACf,iBAAiB;AAClB;;AAEA;CACC,gBAAgB;CAChB,SAAS;CACT,WAAW;CACX,WAAW;CACX,eAAe;CACf,YAAY;AACb;;AAEA;CACC,UAAU;AACX;;AAEA;CACC,YAAY;CACZ,aAAa;CACb,uBAAuB;CACvB,mBAAmB;AACpB;;AAEA;CACC,gBAAgB;CAChB,YAAY;CACZ,aAAa;CACb,eAAe;AAChB;;AAEA;CACC,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,aAAa;CACb,YAAY;AACb;;AAEA;CACC,aAAa;CACb,uBAAuB;CACvB,mBAAmB;CACnB,aAAa;CACb,YAAY;AACb;;AAEA;CACC,WAAW;CACX,YAAY;CACZ,uBAAuB;AACxB;;AAEA;CACC,eAAe;CACf,0CAA0C;AAC3C;;AAEA;CACC,WAAW;CACX,YAAY;AACb;;AAEA;CACC,aAAa;AACd",sourcesContent:['@font-face {\n\tfont-family: "RumFont";\n\tsrc: url("../assets/rumFont.ttf");\n}\n\n* {\n\tfont-family: "RumFont";\n}\n\nhtml,\nbody {\n\theight: 100%;\n\twidth: 100%;\n\tmargin: 0;\n\tpadding: 0;\n\tfont-family: "Roboto", serif;\n}\n\nbody {\n\tbackground-image: url("../assets/background.jpg");\n\tbackground-size: cover;\n\tbackground-color: rgba(0, 0, 0, 0.4);\n\tbackground-blend-mode: darken;\n}\n\n.header {\n\theight: 10vh;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tcolor: #bfdbfe;\n}\n\n.header > img {\n\theight: 80%;\n}\n\n.header > .logoText {\n\tfont-family: "RumFont";\n\tfont-size: 20px;\n}\n\nbutton.rules {\n\tposition: absolute;\n\ttop: 20px;\n\tright: 20px;\n\tbackground-color: #fbfbfbbc;\n\tborder: none;\n\tborder-radius: 5px;\n\tpadding: 5px;\n\tcursor: pointer;\n}\n\ndialog {\n\twidth: 50%;\n\theight: 70%;\n\tbackground-color: #fbfbfb;\n\tborder-radius: 5px;\n\tpadding: 10px 20px;\n\tborder: none;\n}\n\ndialog > div {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n}\n\ndialog p {\n\talign-self: flex-start;\n\tfont-family: "Roboto", serif;\n\tfont-size: 20px;\n\tfont-weight: bold;\n}\n\n.closeDialog {\n\tposition: sticky;\n\ttop: 10px;\n\tright: 10px;\n\twidth: 40px;\n\tcursor: pointer;\n\topacity: 0.5;\n}\n\n.closeDialog:hover {\n\topacity: 1;\n}\n\n.gameContainer {\n\theight: 90vh;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n\n.board {\n\tmin-width: 360px;\n\twidth: 360px;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n}\n\n.rowNbr {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 31.5px;\n\theight: 30px;\n}\n\n.columnNbr {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\twidth: 31.5px;\n\theight: 30px;\n}\n\n.cell {\n\twidth: 30px;\n\theight: 30px;\n\tborder: 1px solid white;\n}\n\n.cell.active:hover {\n\tcursor: pointer;\n\tbackground-color: rgba(255, 255, 255, 0.3);\n}\n\n.cell > img {\n\twidth: 100%;\n\theight: 100%;\n}\n\n#hidden {\n\tdisplay: none;\n}\n'],sourceRoot:""}]);const u=l},288:(n,t,e)=>{"use strict";e.d(t,{A:()=>i});var r=e(354),o=e.n(r),A=e(314),a=e.n(A)()(o());a.push([n.id,'.playerSetup {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tborder-radius: 5px;\n\tgap: 20px;\n\tpadding: 20px;\n\tbackground-color: rgb(0, 0, 0, 0.7);\n\tcolor: white;\n}\n\n.playerContainer {\n\tdisplay: flex;\n\tgap: 20px;\n}\n\n.p1,\n.p2 {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 10px;\n}\n\n.p1 > img,\n.p2 > img {\n\twidth: 100px;\n\theight: 100px;\n\tpadding: 0;\n\tmargin: 0;\n}\n\ninput#p1Name,\ninput#p2Name {\n\tfont-size: medium;\n\tfont-weight: bold;\n\tpadding: 10px;\n\tborder-radius: 5px;\n}\n\ninput[type="radio"],\nlabel {\n\tmargin: 0;\n\tpadding: 0;\n\tcursor: pointer;\n}\n\n.submitBtn {\n\tpadding: 10px 20px;\n\tborder-radius: 5px;\n\tborder: none;\n\tbackground-color: #4caf50;\n\tcolor: white;\n\tcursor: pointer;\n}\n',"",{version:3,sources:["webpack://./src/css/player.css"],names:[],mappings:"AAAA;CACC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,kBAAkB;CAClB,SAAS;CACT,aAAa;CACb,mCAAmC;CACnC,YAAY;AACb;;AAEA;CACC,aAAa;CACb,SAAS;AACV;;AAEA;;CAEC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,SAAS;AACV;;AAEA;;CAEC,YAAY;CACZ,aAAa;CACb,UAAU;CACV,SAAS;AACV;;AAEA;;CAEC,iBAAiB;CACjB,iBAAiB;CACjB,aAAa;CACb,kBAAkB;AACnB;;AAEA;;CAEC,SAAS;CACT,UAAU;CACV,eAAe;AAChB;;AAEA;CACC,kBAAkB;CAClB,kBAAkB;CAClB,YAAY;CACZ,yBAAyB;CACzB,YAAY;CACZ,eAAe;AAChB",sourcesContent:['.playerSetup {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tborder-radius: 5px;\n\tgap: 20px;\n\tpadding: 20px;\n\tbackground-color: rgb(0, 0, 0, 0.7);\n\tcolor: white;\n}\n\n.playerContainer {\n\tdisplay: flex;\n\tgap: 20px;\n}\n\n.p1,\n.p2 {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tgap: 10px;\n}\n\n.p1 > img,\n.p2 > img {\n\twidth: 100px;\n\theight: 100px;\n\tpadding: 0;\n\tmargin: 0;\n}\n\ninput#p1Name,\ninput#p2Name {\n\tfont-size: medium;\n\tfont-weight: bold;\n\tpadding: 10px;\n\tborder-radius: 5px;\n}\n\ninput[type="radio"],\nlabel {\n\tmargin: 0;\n\tpadding: 0;\n\tcursor: pointer;\n}\n\n.submitBtn {\n\tpadding: 10px 20px;\n\tborder-radius: 5px;\n\tborder: none;\n\tbackground-color: #4caf50;\n\tcolor: white;\n\tcursor: pointer;\n}\n'],sourceRoot:""}]);const i=a},314:n=>{"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,A){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(a[s]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&a[d[0]]||(void 0!==A&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=A),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},417:n=>{"use strict";n.exports=function(n,t){return t||(t={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),t.hash&&(n+=t.hash),/["'() \t\n]|(%20)/.test(n)||t.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{"use strict";n.exports=function(n){var t=n[1],e=n[3];if(!e)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),A="/*# ".concat(o," */");return[t].concat([A]).join("\n")}return[t].join("\n")}},72:n=>{"use strict";var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var A={},a=[],i=0;i<n.length;i++){var s=n[i],c=r.base?s[0]+r.base:s[0],d=A[c]||0,l="".concat(c," ").concat(d);A[c]=d+1;var C=e(l),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==C)t[C].references++,t[C].updater(p);else{var u=o(p,r);r.byIndex=i,t.splice(i,0,{identifier:l,updater:u,references:1})}a.push(l)}return a}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var A=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<A.length;a++){var i=e(A[a]);t[i].references--}for(var s=r(n,o),c=0;c<A.length;c++){var d=e(A[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}A=s}}},659:n=>{"use strict";var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:n=>{"use strict";n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{"use strict";n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var A=e.sourceMap;A&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(A))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{"use strict";n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}},157:n=>{function t(n,t){return{x:n,y:t}}class e{board={ships:[],Hits:[],addShip(n){this.ships.push(n)},getShips(){return this.ships},addHit(n){this.Hits.push(n)},getHits(){return this.Hits}};isLegal(n){return!(n.x>9||n.x<0||n.y>9||n.y<0)}isOccupied(n){const t=this.board.getShips();let e=!1;return t.forEach(((t,r)=>{for(const o of t.occupiedCells)n.x==o.x&&n.y==o.y&&(e=r)})),e}hasBeenHit(n){const t=this.board.getHits();let e=!1;for(const r of t)n.x==r.x&&n.y==r.y&&(e=!0);return e}deployShip(n,e,r){const o=n.getSize();let A=[];for(let n=0;n<o;n++)"H"==r&&A.push(t(e.x,e.y+n)),"V"==r&&A.push(t(e.x+n,e.y));let a=!0;for(const n of A)!1===this.isOccupied(n)&&this.isLegal(n)||(a=!1);if(a){const t={ship:n,rearCell:e,occupiedCells:A,orientation:r};return this.board.addShip(t),1}return 0}receiveAttack(n){if(!this.hasBeenHit(n)){const t=this.isOccupied(n);return!1!==t&&this.board.ships[t].ship.hit(),this.board.addHit(n),1}return 0}allShipsSunk(){const n=this.board.getShips();let t=!0;for(const e of n)e.ship.isSunk()||(t=!1);return t}}n.exports={Ship:class{#n=0;#t=0;constructor(n){this.#t=n}getSize(){return this.#t}hit(){this.#n++}isSunk(){return this.#n==this.#t}},Gameboard:e,Cell:t,Player:class{constructor(n,t){this.name=n,this.type=t,this.gameboard=new e}}}},25:(n,t,e)=>{"use strict";n.exports=e.p+"576b6544b9b119fca89c.jpg"},821:(n,t,e)=>{"use strict";n.exports=e.p+"c58880be8fd8f6a39e89.ttf"}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var A=t[r]={id:r,exports:{}};return n[r](A,A.exports,e),A.exports}e.m=n,e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var t=e.g.document;if(!n&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(n=t.currentScript.src),!n)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),e.b=document.baseURI||self.location.href,e.nc=void 0;var r={};(()=>{"use strict";e.d(r,{n:()=>L});var n=e(72),t=e.n(n),o=e(825),A=e.n(o),a=e(659),i=e.n(a),s=e(56),c=e.n(s),d=e(540),l=e.n(d),C=e(113),p=e.n(C),u=e(944),m={};m.styleTagTransform=p(),m.setAttributes=c(),m.insert=i().bind(null,"head"),m.domAPI=A(),m.insertStyleElement=l(),t()(u.A,m),u.A&&u.A.locals&&u.A.locals;var g=e(288),b={};b.styleTagTransform=p(),b.setAttributes=c(),b.insert=i().bind(null,"head"),b.domAPI=A(),b.insertStyleElement=l(),t()(g.A,b),g.A&&g.A.locals&&g.A.locals;var h=e(639),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=A(),f.insertStyleElement=l(),t()(h.A,f),h.A&&h.A.locals&&h.A.locals;var B=e(373),x={};x.styleTagTransform=p(),x.setAttributes=c(),x.insert=i().bind(null,"head"),x.domAPI=A(),x.insertStyleElement=l(),t()(B.A,x),B.A&&B.A.locals&&B.A.locals;const y=e.p+"05db0fd123a81f7bd03e.svg",v=e.p+"6b9566a0e78728eb7c67.svg",S=e.p+"5c66cf51cb15ef6f14bc.svg";var w=e(157);const E=e.p+"cece5ac1bb7ec0ab4c8e.svg",k=e.p+"6d48eac7b6dff8a6c2fa.svg",Y=e.p+"f0b2b7539da19b57def8.svg",T=e.p+"544c8ff175e73367d86e.svg";function N(n,t){let e=new w.Gameboard,r=[n];"human"==t.type&&r.push(t);const o=document.querySelector(".playerName");o.textContent=n.name;const A=document.querySelector("#remainingShips");q(A,y,5);let a=5;const i=document.querySelector("#shipSizeValue");q(i,y,a);const s=document.querySelector(".orientation");s.addEventListener("click",(()=>{"H"==s.getAttribute("value")?(s.src=T,s.setAttribute("value","V")):(s.src=Y,s.setAttribute("value","H"))}));const c=document.querySelector(".clearBtn");c.addEventListener("click",(()=>{a=5,q(i,y,a),q(A,y,5),e=new w.Gameboard,L(e,l),C(),d.disabled=!0,d.classList.add("disabled")}));const d=document.querySelector(".deployBtn");d.addEventListener("click",(()=>{r.shift().gameboard=e,c.click(),0==r.length?(document.querySelector(".boardSetup").id="hidden","computer"==t.type?(z(),t=function(n){let t=n.gameboard,e=5,r=5;for(;e>0;){let n=!1;const o=new w.Ship(r--);do{let r=Math.floor(10*Math.random()),A=Math.floor(10*Math.random()),a=["H","V"].at(Math.floor(2*Math.random()));const i=(0,w.Cell)(r,A);t.deployShip(o,i,a)&&(n=!0,e--)}while(!n)}return n}(t),setTimeout((()=>{z(),document.querySelector(".game").removeAttribute("id")}),2e3)):document.querySelector(".game").removeAttribute("id"),function(n,t){document.querySelector(".p1Name").textContent=n.name,document.querySelector(".p2Name").textContent=t.name;const e=document.querySelector(".player1 > .board"),r=document.querySelector(".player2 > .board"),o={id:1,opponentType:"computer"==t.type?"C":"H",player:n,boardDiv:e},A={id:2,opponentType:"H",player:t,boardDiv:r};let a=A;!function e(r,i){d();const s=r.querySelectorAll(".cell");if(1==a.id&&"C"==a.opponentType){let n=!1;for(;!n;){let t=Math.floor(10*Math.random()),e=Math.floor(10*Math.random());const r=(0,w.Cell)(t,e);i.gameboard.hasBeenHit(r)||(n=!0,i.gameboard.receiveAttack(r),d(),c())}}else s.forEach((n=>{const t=n.getAttribute("x"),e=n.getAttribute("y"),r=(0,w.Cell)(t,e);i.gameboard.hasBeenHit(r)||n.addEventListener("click",(()=>{i.gameboard.receiveAttack(r),d(),c()}))}));function c(){i.gameboard.allShipsSunk()||(a=1==a.id?A:o,e(a.boardDiv,a.player))}function d(){const e=document.querySelector(".gameState"),r=document.querySelector(".gameState > span");if(i.gameboard.allShipsSunk()){L(o.player.gameboard,o.boardDiv),L(A.player.gameboard,A.boardDiv);let r=1==a.id?t:n;e.textContent=`Game Over! ${r.name} is the winner!`,function(){const n=document.querySelector(".game"),t=document.createElement("button");t.classList.add("playAgainBtn"),t.textContent="Play Again",n.appendChild(t),t.addEventListener("click",(()=>{location.reload()}))}()}else 1==a.id?(L(o.player.gameboard,o.boardDiv,!0),L(A.player.gameboard,A.boardDiv),r.textContent=t.name,r.classList.toggle("second")):2==a.id&&(L(o.player.gameboard,o.boardDiv),L(A.player.gameboard,A.boardDiv,!0),r.textContent=n.name)}}(a.boardDiv,a.player)}(n,t)):(o.classList.add("second"),o.textContent=r[0].name)}));const l=document.querySelector(".board");function C(){l.querySelectorAll(".cell").forEach((n=>{n.addEventListener("click",(()=>{let t=A.childNodes.length;const r=Number(n.getAttribute("x")),o=Number(n.getAttribute("y")),c=s.getAttribute("value"),p=new w.Ship(a),u=(0,w.Cell)(r,o),m=document.querySelector(".errorMsg");m.textContent="",e.deployShip(p,u,c)?(a--,q(i,y,a),t--,q(A,y,t),L(e,l),t>0?C():(d.disabled=!1,d.classList.remove("disabled"))):m.textContent="Error: Invalid Placement"}))}))}L(e,l),C()}function q(n,t,e){n.innerHTML="";for(let r=0;r<e;r++){const e=document.createElement("img");e.src=t,n.appendChild(e)}}function z(){const n=document.querySelector(".loader-container");if(n)n.remove();else{const n=document.querySelector(".gameContainer"),t=document.createElement("div");t.className="loader-container",n.appendChild(t);const e=document.createElement("div");e.className="loader",t.appendChild(e);const r=document.createElement("div");r.textContent="Machine is deploying...",t.appendChild(r)}}function L(n,t,e=!1){t.innerHTML="",M(t," ","columnNbr");for(let n=0;n<10;n++)M(t,n+1,"columnNbr");for(let r=0;r<10;r++){M(t,r+1,"rowNbr");for(let o=0;o<10;o++){const A=(0,w.Cell)(r,o),a=document.createElement("div");a.classList.add("cell"),a.setAttribute("x",r),a.setAttribute("y",o);const i=document.createElement("img");i.classList.add("cellImg"),n.hasBeenHit(A)&&!1!==n.isOccupied(A)?i.src=S:n.hasBeenHit(A)?i.src=v:!1===n.isOccupied(A)||e?a.classList.add("active"):i.src=y,a.appendChild(i),t.appendChild(a)}}}function M(n,t,e){const r=document.createElement("div");r.classList.add(e),r.textContent=t,n.appendChild(r)}const j=document.querySelector("dialog"),R=document.querySelector(".rules"),U=document.querySelector(".closeDialog");R.addEventListener("click",(()=>{j.showModal()})),U.addEventListener("click",(()=>{j.close()})),function(n,t){let e="computer";const r=document.querySelector(".p2 > .type");r.addEventListener("click",(()=>{const n=document.querySelector(".p2 > img");e=r.querySelector('input[name="p2Type"]:checked').value,n.src="computer"==e?k:E})),document.querySelector(".submitBtn").addEventListener("click",(()=>{const r=document.getElementById("p1Name").value,o=document.getElementById("p2Name").value;n=new w.Player(r,"human"),t=new w.Player(o,e),document.querySelector(".playerSetup").id="hidden",document.querySelector(".boardSetup").removeAttribute("id"),N(n,t)}))}(void 0,void 0)})()})();
//# sourceMappingURL=app.bundle.js.map