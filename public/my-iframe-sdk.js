(function () {
  const TRUSTED_ORIGIN = "https://chatfactorynuturenowmvp.pathfactory-development.com";

  window.MyIframeSDK = {
    openWithInput: function (inputValue, containerId = "my-modal") {
      const modal = document.getElementById(containerId);
      const iframe = document.getElementById(`${containerId}-iframe`);
console.log(modal,"modal")
      if (!modal || !iframe) {
        
        console.error(`MyIframeSDK: Modal or iframe with ID "${containerId}" not found.`);
        return;
      }

      modal.style.display = "flex";

      const message = {
        type: "MY_IFRAME_SDK_INPUT",
        input: inputValue
      };

      const sendMessage = () => {
        iframe.contentWindow.postMessage(message, TRUSTED_ORIGIN);
      };

      if (iframe.contentWindow) {
        sendMessage();
      }

      iframe.onload = sendMessage;
    }
  };

  // Optional: Listen for secure iframe messages
  window.addEventListener("message", (event) => {
    if (event.origin !== TRUSTED_ORIGIN) return;
    console.log("Secure message from iframe:", event.data);
  });
})();
