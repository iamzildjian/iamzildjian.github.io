"use strict";var disqus_config=function(){this.page.url=document.URL,this.page.identifier=document.location.origin+document.location.pathname+document.location.search};function loadDisqus(){var t=document,e=t.createElement("script");e.src="https://tomotoes-com.disqus.com/embed.js",e.setAttribute("data-timestamp",+new Date),(t.head||t.body).appendChild(e)}var comments=document.getElementById("comments"),hadLoadDisqus=!1;function commentsHasInViewport(t){var e=comments.getBoundingClientRect();return 0<=e.top&&0<=e.left&&e.top<=(window.innerHeight||document.documentElement.clientHeight)*t}function processDisqus(){!hadLoadDisqus&&commentsHasInViewport(2.5)&&(hadLoadDisqus=!0,loadDisqus())}processDisqus(),window.addEventListener("scroll",throttle(processDisqus,300),!1);