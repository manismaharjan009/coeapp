import { setConfig, cold } from 'react-hot-loader'

setConfig({
  ignoreSFC: true, // RHL will be __completely__ disabled for SFC
  pureRender: true, // RHL will not change render method
  onComponentCreate: (type) =>
    (String(type).indexOf('useState') > 0 ||
      String(type).indexOf('useEffect') > 0) &&
    cold(type),
});