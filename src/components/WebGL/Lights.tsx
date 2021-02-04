const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.48} />
      <pointLight position={[7, -5, 10]} intensity={1} />
      <pointLight position={[1, -1, -5]} intensity={0.5} />
    </>
  )
}

export default Lights
