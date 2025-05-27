import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  imageUrl: string
  projectUrl: string
  gradient: string
}

export function ProjectCard({ title, description, imageUrl, projectUrl, gradient }: ProjectCardProps) {
  const handleClick = () => {
    window.open(projectUrl, "_blank")
  }

  return (
    <div
      className="overflow-hidden bg-white shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 rounded-lg"
      onClick={handleClick}
    >
      <div className={`aspect-video ${gradient}`}>
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={400}
          height={300}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  )
}
