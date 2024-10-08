import Image from 'next/image'

export enum LiTheme {
  dark = 'dark',
  white = 'white',
}
interface ImageLiPropsType {
  width?: string
  height?: string
  theme?: LiTheme
}

export const ImageLi = (props: ImageLiPropsType) => {
  return (
    <Image
      alt="LiTools.png"
      src={
        props.theme === LiTheme.dark
          ? require('../../../assets/logowhite.png')
          : require('../../../assets/logodark.png')
      }
      style={{ width: props.width ?? 184, height: props.height ?? 53 }}
    />
  )
}
