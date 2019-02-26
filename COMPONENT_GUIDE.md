## <h1> Notes on AACN_FORM Component v1.2 </h1>


<h2> Component Architecture </h2>

 The form component will provide a reusable, configurable form with common functionality built in. It will 
 take a configuration file written either in js or json. <br>
 This allows the developer to easily construct a new form using react without having to write any react code by simply defining the form with a configuration file.<br>
  
  The schema of the configuration file is important to get right, there may be another utility function or HOC to aid this.

<h2><b> UTILS LIBRARY </b> </h2>

The utility library is  a collection of utility functions, each file should contain annotation explaining what purpose it serves.

1. <u> promisePollyFill.js </u> :  <i> A pollyfill for promises and fetch, this will requre es6-promise and whatwg-fetch packages to be installed </i>


2. <u> multiMount.js </u> :  <i> Pass in component and element id identifier , will  mount the each component with identifier appearing in its id</i>


