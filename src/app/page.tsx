// app/page.jsimport Chatbot from "./components/Chatbot";

import HeroSection from './components/HeroSection';
export default function Home() {
  return (
    <> 
    {/* <Chatbot /> */}

      <HeroSection />
      {/* Featured Categories Section (Optional) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {['Electronics', 'Fashion', 'Home & Decor', 'Beauty', 'Sports'].map((category, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-square bg-white rounded-lg shadow-sm overflow-hidden flex items-center justify-center group-hover:shadow-md transition-shadow">
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                    {/* This would be an image in a real implementation */}
                    <span className="text-3xl text-gray-400">{category.charAt(0)}</span>
                  </div>
                </div>
                <h3 className="mt-3 text-center font-medium text-gray-800">{category}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section (Optional) */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <a href="/products/featured" className="text-blue-600 hover:text-blue-800 font-medium">View All</a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* Example product cards - would be dynamic in a real implementation */}
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-square bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-medium mb-2">Product Name</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900 font-bold">$99.99</span>
                    <button className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm hover:bg-blue-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner (Optional) */}
    
    </>
  );
}