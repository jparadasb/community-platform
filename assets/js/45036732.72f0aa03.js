"use strict";(self.webpackChunkoa_docs=self.webpackChunkoa_docs||[]).push([[670],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6057:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i={slug:"/",title:"Local Setup"},l=void 0,s={unversionedId:"Getting Started/setup",id:"Getting Started/setup",isDocsHomePage:!1,title:"Local Setup",description:"Prerequisites",source:"@site/docs/Getting Started/setup.md",sourceDirName:"Getting Started",slug:"/",permalink:"/community-platform/",editUrl:"https://github.com/ONEARMY/community-platform/edit/master/documentation/docs/Getting Started/setup.md",tags:[],version:"current",frontMatter:{slug:"/",title:"Local Setup"},sidebar:"mainSidebar",next:{title:"Recommended Tools",permalink:"/community-platform/Getting Started/recommended-tools"}},p=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Run locally",id:"run-locally",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[{value:"Module not found",id:"module-not-found",children:[]},{value:"Installation freezes",id:"installation-freezes",children:[]},{value:"Error: ENOENT: no such file or directory",id:"error-enoent-no-such-file-or-directory",children:[]}]}],u={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download and install ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/downloads"},"Git"),(0,o.kt)("br",{parentName:"p"}),"\n","This will be used to download the repository")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download and install ",(0,o.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node"),(0,o.kt)("br",{parentName:"p"}),"\n","This will be used to run the local server. It included the ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," package manager"),(0,o.kt)("div",{parentName:"li",className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The recommended version of node to use is ",(0,o.kt)("strong",{parentName:"p"},"node 12")," as this is what also runs in the production environment. If running a higher version and experiencing issues please file a bug report."),(0,o.kt)("p",{parentName:"div"},"You can use tools like ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Schniz/fnm"},"fnm")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/nvm-sh/nvm"},"nvm")," to run multiple versions of node on the same machine")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download and install Yarn (v2)"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm i -g yarn\n")),(0,o.kt)("h2",{id:"run-locally"},"Run locally"),(0,o.kt)("p",null,"Clone the repo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/ONEARMY/community-platform\n")),(0,o.kt)("p",null,"Change directory into the cloned repo to run future commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd community-platform\n")),(0,o.kt)("p",null,"Install dependencies"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn install\n")),(0,o.kt)("p",null,"Run the platform"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn start\n")),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"Sometimes dependencies can get into an outdated or bad state. As a general fix, deleting all existing 3rd party dependencies and installing clean may fix many issues. There is a helper script available to do this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn install:clean\n")),(0,o.kt)("p",null,"Otherwise possible solutions to some specific issues are also listed below"),(0,o.kt)("h3",{id:"module-not-found"},"Module not found"),(0,o.kt)("p",null,"If whilst attempting to run the app a ",(0,o.kt)("inlineCode",{parentName:"p"},"module-not-found")," (or similar) error appears, it is likely because dependencies have been updated and require install again. Running the ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn install")," command again should fix."),(0,o.kt)("h3",{id:"installation-freezes"},"Installation freezes"),(0,o.kt)("p",null,"Some of the larger packages that require binaries to be built can get themselves into a bad state during install. If this happens usually the easiest way to resolve is to try installing individual workspaces, e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn workspace functions install\nyarn workspace oa-cypress install\nyarn workspace oa-docs install\n")),(0,o.kt)("h3",{id:"error-enoent-no-such-file-or-directory"},"Error: ENOENT: no such file or directory"),(0,o.kt)("p",null,"If you see an error message suggesting that a particular folder/file could not be installed, there is a chance that the previous command would have installed/fixed anyway and things might just work."),(0,o.kt)("p",null,"If they don't, then try deleting the ",(0,o.kt)("inlineCode",{parentName:"p"},"node_modules")," folder in the workspace mentioned in the error message (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"./packages/documentation/node_modules")," or similar)"))}c.isMDXComponent=!0}}]);