(function () {
    const modalHTML = `
      <div id="my-modal" style="display:none;position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);justify-content:center;align-items:center;z-index:9999;">
        <div style="background:white;padding:20px;border-radius:8px;width:80%;height:80%;position:relative;">
          <button id="my-close-btn" style="position:absolute;top:10px;right:10px;background-color:#FF0000;color:white;border:none;padding:10px;cursor:pointer;border-radius:5px;">Close</button>
          <iframe id="my-iframe" src="https://chatfactorynuturenowmvp.pathfactory-development.com/aichat/baremetal" style="width:100%;height:100%;border:none;"></iframe>
        </div>
      </div>`;
    document.body.insertAdjacentHTML("beforeend", modalHTML);
    const modal = document.getElementById("my-modal");
    const iframe = document.getElementById("my-iframe");
    const closeBtn = document.getElementById("my-close-btn");
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
    window.MyIframeSDK = {
      openWithInput: function (inputValue) {
        modal.style.display = "flex";
        const message = {
          type: "MY_IFRAME_SDK_INPUT",
          input: inputValue
        };
        const sendMessage = () => iframe.contentWindow.postMessage(message, "*");
        if (iframe.contentWindow) sendMessage();
        iframe.onload = sendMessage;
      }
    };
  })();