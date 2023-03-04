import hexToRgba from 'hex-to-rgba';
let headingColor = '#001220';
export const colors = {
    headingColor,
    headingShadowColor: '#3d434b',
    bodyPatternFg: hexToRgba(headingColor, .8),
    primaryColor: '#647594',
    titleColor: '#f1f1f1'
}
