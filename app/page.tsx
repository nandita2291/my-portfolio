import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#F5F1E8]">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6">
        <div className="text-xl font-bold text-gray-900">Nandita Sajeev</div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#home" className="text-gray-700 hover:text-gray-900 transition-colors">
            Home
          </Link>
          <Link href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">
            About
          </Link>
          <Link href="#work" className="text-gray-700 hover:text-gray-900 transition-colors">
            Work
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
            <Github className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link href="#" className="text-gray-700 hover:text-gray-900 transition-colors">
            <Twitter className="w-5 h-5" />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-lg text-gray-600">Hello, I'm Nandita</p>
                <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Software
                  <br />
                  Developer
                </h1>
                <p className="text-lg text-gray-600">based in Kochi, India</p>
              </div>
              <a
                href="/NanditaSajeev_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-medium transition-colors"
              >
                Resume
              </a>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <Image
                    src="/profile.jpeg"
                    alt="Nandita Sajeev"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">About</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            I'm Nandita Sajeev, an Associate Software Developer with a strong foundation in full-stack development using
            Angular and C# .NET. I'm deeply passionate about Artificial Intelligence and Machine Learning, which I'm
            currently pursuing through an M.Tech at BITS Pilani. My goal is to merge intelligent systems with intuitive
            design to build smarter, more human-centered digital experiences.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            With hands-on experience in designing accessible interfaces, writing robust test suites, and integrating
            scalable APIs, I love turning complex ideas into real, impactful solutions. Whether it's decoding human
            emotions through AI or building clean, performant UI components, I thrive on challenges that blend
            creativity with deep tech.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            I believe in continuous learning, effective communication, and using technology as a tool to improve lives.
          </p>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="border-l-2 border-gray-300 pl-8 relative">
            <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-900 rounded-full"></div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-gray-900">2023 - Present</h3>
              <h4 className="text-lg font-semibold text-gray-800">Associate Software Developer at SOTI</h4>
              <p className="text-gray-600">
                Working on full-stack development using Angular and C# .NET, focusing on building scalable enterprise
                solutions and intuitive user interfaces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-12">Work</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <a
              href="https://github.com/nandita2291/Emotion-recognition-online-learners"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg"
            >
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-purple-600">
                <Image
                  src="/emoDetect.png?height=300&width=400"
                  alt="Emotion Detection of Online Learners"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Emotion Recognition of Online Learners using DenseNet</h3>
                <p className="text-gray-600 text-sm">
Utilized deep learning techniques to analyze and interpret the emotional states of online learners during virtual meetings.
Generated detailed reports on learners’ emotional states to provide insights and enhance understanding, enabling more
effective engagement and support strategies                
                </p>
              </div>
            </a>

            <a
              href="https://github.com/nandita2291/SinoText"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg"
            >
              <div className="aspect-video bg-gradient-to-br from-pink-400 to-red-600">
                <Image
                  src="/Sinotext.png?height=300&width=400"
                  alt="SinoText"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">SinoText</h3>
                <p className="text-gray-600 text-sm">
                    SinoText is an image classification android application that recognises Indian sign language and converts it into text.
                </p>
              </div>
            </a>
               <a
              href="https://github.com/nandita2291/Medusa"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg"
            >
              <div className="aspect-video bg-gradient-to-br from-pink-400 to-red-600">
                <Image
                  src="/medusa.png?height=300&width=400"
                  alt="Medusa"
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Medusa</h3>
                <p className="text-gray-600 text-sm">
                  MEDUSA or MEDical Utility Segregation Algorithm is a deep learning model for segregating medical wastes. Waste segregation is a vital role in waste management and proper segregation can result in effective waste management. This model will classify the given waste image into prominent medical waste categories.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">Contact</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm always interested in discussing new opportunities, innovative projects, or collaborations in AI/ML
                and software development. Feel free to reach out!
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-600">sj.nandita@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-600">Kochi, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
