import './index.scss'
import LogoJ from '../../../assets/images/logo-j.png'
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 10,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={LogoJ}
        alt="JavaScript,  Developer"
      />

      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="222.000000pt"
        height="326.000000pt"
        viewBox="0 0 222.000000 326.000000"
      >
        <g
          className="svg-container"
          transform="translate(0.000000,326.000000) scale(0.100000,-0.100000)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M1360 2003 c0 -616 -4 -1025 -10 -1068 -27 -180 -106 -246 -296 -247
            -139 -1 -222 35 -271 119 -43 74 -54 135 -60 336 l-6 187 -249 0 -250 0 5
            -237 c3 -205 7 -249 26 -318 93 -337 341 -521 732 -542 136 -7 276 8 399 44
            264 76 435 253 512 528 l23 80 3 1058 3 1057 -281 0 -280 0 0 -997z"
          />
        </g>
      </svg>
    </div>
  )
}

export default Logo
