export const animateWithGsapTimeline = (timeline,rotationRef,rotationState,firstTarget,secondTarget,animationprops) => {
  timeline.to(rotationRef.current.rotation,{
    y : rotationState,
    duration : 1,
    ease : 'power2.inOut'
  })
  
  timeline.to(
    firstTarget,
    {
      ...animationprops,
      ease : 'power2.inOut'
    },
    '<'
  )

  timeline.to(
    secondTarget,
    {
      ...animationprops,
      ease : 'power2.inOut'
    },
    '<'
  )
}