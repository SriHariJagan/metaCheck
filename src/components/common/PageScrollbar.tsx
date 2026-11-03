import { useCallback, useEffect, useRef, useState } from 'react'
import { cn } from '@/utils/cn'

const MIN_THUMB_HEIGHT = 44
const TRACK_INSET = 16

type Geometry = {
  height: number
  top: number
  visible: boolean
}

export function PageScrollbar() {
  const [geometry, setGeometry] = useState<Geometry>({ height: 0, top: 0, visible: false })
  const [hovering, setHovering] = useState(false)
  const [dragging, setDragging] = useState(false)
  const dragStartRef = useRef({ pointerY: 0, scrollY: 0 })

  const update = useCallback(() => {
    const scrollHeight = document.documentElement.scrollHeight
    const viewportHeight = window.innerHeight
    const trackHeight = viewportHeight - TRACK_INSET * 2

    if (scrollHeight <= viewportHeight + 1) {
      setGeometry({ height: 0, top: 0, visible: false })
      return
    }

    const height = Math.max(MIN_THUMB_HEIGHT, (viewportHeight / scrollHeight) * trackHeight)
    const maxScroll = scrollHeight - viewportHeight
    const maxTop = trackHeight - height
    const progress = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0

    setGeometry({ height, top: progress * maxTop, visible: true })
  }, [])

  useEffect(() => {
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    const observer = new ResizeObserver(update)
    observer.observe(document.body)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
      observer.disconnect()
    }
  }, [update])

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    setDragging(true)
    dragStartRef.current = { pointerY: event.clientY, scrollY: window.scrollY }
    event.currentTarget.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return

    const scrollHeight = document.documentElement.scrollHeight
    const viewportHeight = window.innerHeight
    const trackHeight = viewportHeight - TRACK_INSET * 2
    const thumbHeight = Math.max(MIN_THUMB_HEIGHT, (viewportHeight / scrollHeight) * trackHeight)
    const maxScroll = scrollHeight - viewportHeight
    const maxTop = trackHeight - thumbHeight

    if (maxScroll <= 0 || maxTop <= 0) return

    const delta = event.clientY - dragStartRef.current.pointerY
    window.scrollTo({ top: dragStartRef.current.scrollY + (delta / maxTop) * maxScroll, behavior: 'auto' })
  }

  const stopDragging = (event: React.PointerEvent<HTMLDivElement>) => {
    setDragging(false)
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId)
    }
  }

  if (!geometry.visible) return null

  return (
    <div
      className="pointer-events-none fixed inset-y-4 right-1.5 z-[60] hidden w-2.5 md:block"
      aria-hidden="true"
    >
      <div
        className={cn('pointer-events-auto absolute inset-x-0 touch-none rounded-full', dragging ? 'cursor-grabbing' : 'cursor-grab')}
        style={{ height: `${geometry.height}px`, transform: `translateY(${geometry.top}px)` }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        <span
          className={cn(
            'page-scrollbar-thumb absolute inset-y-0 right-0 rounded-full transition-all duration-300',
            dragging || hovering ? 'w-2 opacity-100' : 'w-1 opacity-70',
          )}
        />
      </div>
    </div>
  )
}
