export default function CharacteristiscSection() {

  const platformCharacteristics = [
    {
      id: 1,
      name: "Collaboration",
      icon: "",
    },
    {
      id: 2,
      name: "Innovation",
      icon: "",
    },
    {
      id: 3,
      name: "Productivity",
      icon: "",
    },

  ]

  return (
    <div className="grid grid-cols-2 px-36 py-20">
      <img src="https://i.ibb.co/7tLVtYk/Captura-de-ecran-din-2024-03-03-la-12-03-19-removebg-preview.png" alt=""/>
      <div className="mt-20">
        <p className="text-[32px]">Unlock the Power of <span
          className="text-primary-purple">Collaboration</span> with
          Our Platform</p>
        <p className="text-[14px] mt-6 text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab
          aspernatur corporis eius error est id illo illum, laboriosam laudantium molestias mollitia nesciunt odit
          officiis perferendis quo repellendus tenetur veritatis voluptate.
        </p>
        <div className="grid grid-cols-3 mt-16 gap-20">
          {platformCharacteristics.map(function (characteristic) {
            return (
              <div key={characteristic.id} className="flex items-center ">
                <img src="https://i.ibb.co/kqYykhC/Captura-de-ecran-din-2024-03-03-la-13-17-19-removebg-preview.png"
                     className="w-24 h-20 object-cover" alt=""/>
                <p>{characteristic.name}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
