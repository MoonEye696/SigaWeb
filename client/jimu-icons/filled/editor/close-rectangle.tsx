import { React, classNames } from 'jimu-core'
import { SVG, SVGComponentProps } from 'jimu-ui'
import src from '../../svg/filled/editor/close-rectangle.svg'

export const CloseRectangleFilled = (props: SVGComponentProps) => {
  const { className, ...others } = props
  const classes = classNames('jimu-icon jimu-icon-component', className)
  return <SVG className={classes} src={src} {...others} />
}