## <h1> Notes on AACN_FORM Component v1.2 </h1>


<h2> Component Architecture </h2>

 The form component will provide a reusable, configurable form with common functionality built in. It will 
 take a configuration file written either in js or json. <br>
 This allows the developer to easily construct a new form using react without having to write any react code by simply defining the form with a configuration file.<br>
  
  The schema of the configuration file is important to get right, there may be another utility function or HOC to aid this.

<h2><b> UTILS LIBRARY </b> </h2>

The utility library is  a collection of utility functions, each file should contain annotation explaining what purpose it serves.

1. <u> promise-pollyFill.js </u> :  <i> A pollyfill for promises and fetch, this will requre es6-promise and whatwg-fetch packages to be installed </i>


2. <u> multi-mount.js </u> :  <i> Pass in component and element id identifier , will  mount the each DOM element with matching id with a component tree</i>

3. <u> sanitize-.js </u> :  <i> Pass in config object and autmatically correct it , or throw contextual error if cannot be corrected, returns new config</i>

4. <u> is-IE11.js </u> :  <i> A quick check to see if the host environemnt is internet explorer 11 or not</i>


....

<h2><b> COMPONENTS </b> </h2>


 Components will be functions and where state is needed to be persisted we shall use the useReducer and useContext hook to pass down state through the component tree.

**FORM-WRAPPER**
  The form-wrapper is a higher-order component that will eventually be extracted to stand alone. It adds important functionality to the AACNFORM component by\
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; i)  sanitizing the config\
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ii) supplying the top level apis for submission\
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iii) anyother configuration we'd like to pass in

**AACNFORM**
  We will have a AACNFORM component which will take a config object and generate our form. As long as the correct fields are defined in the config object


  **ElementContainer**

  This is the compound component that holds the individual field components. This is called by AACNFORM where a function will loop through the 