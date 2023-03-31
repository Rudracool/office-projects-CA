<div class="gift-cretification-data">
  <h3 class="gift-certificate-title">{{ShowHeader}}</h3>
<div id="gift-certificate-container" class="gift-certificate-container">
  <div class="main-data-container">
    <div class="customdata-main-container">
      <div data-type="alert-placeholder"></div>
    <textarea name="customDataMessage" placeholder="Enter Your Gift certificate comments" id="cust_data_msg" cols="30" rows="1"></textarea>
    </div>
    <div class="button-container">
    <button class="saveBtn" data-action="saveGiftCard">Save</button>
    <button class="email-btn" data-action="sendEmaildata">email</button>

    </div>


  </div>
</div>

<div class="emailTemplateMailData ">
  <div class="emailform">
    <div class="emailInput">
        <input type="email" class="orderWizard-sendmail" placeholder="Enter Your Email Address" name="formEmail" id="emailTemplateForm">
    </div>
    <div class="buttonSendEmail">
        <button class="email-btn" >{{translate 'Send Email'}}</button>
    </div>
  </div>
</div>

</div>
<!--
  Available helpers:
  {{ getExtensionAssetsPath "img/image.jpg"}} - reference assets in your extension
  
  {{ getExtensionAssetsPathWithDefault context_var "img/image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the extension assets folder
  
  {{ getThemeAssetsPath context_var "img/image.jpg"}} - reference assets in the active theme
  
  {{ getThemeAssetsPathWithDefault context_var "img/theme-image.jpg"}} - use context_var value i.e. configuration variable. If it does not exist, fallback to an asset from the theme assets folder
-->