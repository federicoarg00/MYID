export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            MyID
          </h1>
          <p className="text-2xl text-gray-600 mb-8">
            Plataforma de Gestión de Accesorios NFC
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Tu información personal y médica crítica, siempre accesible en emergencias
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">🛍️</div>
              <h3 className="text-xl font-semibold mb-2">E-commerce</h3>
              <p className="text-gray-600">Accesorios NFC personalizados</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">👤</div>
              <h3 className="text-xl font-semibold mb-2">Gestión de Perfil</h3>
              <p className="text-gray-600">Información médica segura</p>
            </div>

            <div className="p-6 bg-white rounded-lg shadow-md">
              <div className="text-4xl mb-4">🚨</div>
              <h3 className="text-xl font-semibold mb-2">Emergencias</h3>
              <p className="text-gray-600">Acceso rápido vital</p>
            </div>
          </div>

          <div className="mt-16">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
              Comenzar Ahora
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
