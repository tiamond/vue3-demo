import { onMounted } from "vue";
export default function (el: string) {
  return new Promise<{ url: string }>((resolve) => {
    onMounted(() => {
      const img = document.querySelector(el) as HTMLImageElement

      img.onload = () => {
        return resolve({
          url: toBase(img)
        })
      }
    })

    const toBase = (img: HTMLImageElement) => {
      const fix = img.src.replace(/(.*)(\.)(\w*)$/, '$3')

      const canvas: HTMLCanvasElement = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      canvas.width = img.width
      canvas.height = img.height
      console.log(canvas.width, canvas.height);

      ctx?.drawImage(img, 0, 0, canvas.width, canvas.height)
      return canvas.toDataURL('image/' + fix)
    }
  })

}