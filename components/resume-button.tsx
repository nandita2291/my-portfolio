import { Button } from "@/components/ui/button"

export function ResumeButton() {
  const handleClick = () => {
    window.open("/resume.pdf", "_blank")
  }

  return (
    <Button
      className="bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-medium"
      onClick={handleClick}
    >
      Resume
    </Button>
  )
}
