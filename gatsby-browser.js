/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// Fix for hooks support
import { setConfig } from 'react-hot-loader'

setConfig({ pureSFC: true })
