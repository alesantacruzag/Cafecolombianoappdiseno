import { useState, useMemo } from 'react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import BottomNav from '../../components/BottomNav';
import type { Screen } from '../../App';
import { useApp, type Product, type Experience } from '../../context/AppContext';
import { MoreVertical, Plus, Edit2, Trash2, X, Package, Ticket, Calendar, Users } from 'lucide-react';

interface AdminProductsProps {
  onNavigate: (screen: Screen) => void;
}

type Tab = 'products' | 'experiences';
type ModalType = 'add-product' | 'edit-product' | 'add-experience' | 'edit-experience' | 'delete' | null;

export default function AdminProducts({ onNavigate }: AdminProductsProps) {
  const { products, addProduct, updateProduct, deleteProduct, experiences, addExperience, updateExperience, deleteExperience, refreshProducts, refreshExperiences } = useApp();
  const [activeTab, setActiveTab] = useState<Tab>('products');

  useMemo(() => {
    refreshProducts();
    refreshExperiences();
  }, []);
  const [modalType, setModalType] = useState<ModalType>(null);
  const [selectedItem, setSelectedItem] = useState<Product | Experience | null>(null);
  const [showOptions, setShowOptions] = useState<string | null>(null);

  // Form states for Product
  const [productForm, setProductForm] = useState({
    name: '',
    price: '',
    stock: '',
    description: '',
    category: '',
    image: ''
  });

  // Form states for Experience
  const [experienceForm, setExperienceForm] = useState({
    name: '',
    price: '',
    description: '',
    duration: '',
    capacity: '',
    image: ''
  });

  const resetProductForm = () => {
    setProductForm({ name: '', price: '', stock: '', description: '', category: '', image: '' });
  };

  const resetExperienceForm = () => {
    setExperienceForm({ name: '', price: '', description: '', duration: '', capacity: '', image: '' });
  };

  const handleAddProduct = () => {
    if (!productForm.name || !productForm.price) return;

    const stock = parseInt(productForm.stock) || 0;
    const status = stock === 0 ? 'out' : stock < 5 ? 'low' : 'active';

    addProduct({
      name: productForm.name,
      price: parseFloat(productForm.price),
      stock,
      description: productForm.description,
      category: productForm.category,
      image: productForm.image || 'https://images.unsplash.com/photo-1763924996486-aa3aeacaf15e?w=400',
      status
    });

    resetProductForm();
    setModalType(null);
  };

  const handleEditProduct = () => {
    if (!selectedItem || !productForm.name || !productForm.price) return;

    const stock = parseInt(productForm.stock) || 0;
    const status = stock === 0 ? 'out' : stock < 5 ? 'low' : 'active';

    updateProduct(selectedItem.id, {
      name: productForm.name,
      price: parseFloat(productForm.price),
      stock,
      description: productForm.description,
      category: productForm.category,
      image: productForm.image,
      status
    });

    resetProductForm();
    setModalType(null);
    setSelectedItem(null);
  };

  const handleAddExperience = () => {
    if (!experienceForm.name || !experienceForm.price) return;

    addExperience({
      name: experienceForm.name,
      price: parseFloat(experienceForm.price),
      description: experienceForm.description,
      duration: experienceForm.duration,
      capacity: parseInt(experienceForm.capacity) || 10,
      image: experienceForm.image || 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400',
      status: 'active',
      destination: (experienceForm as any).destination || 'Quindío'
    });

    resetExperienceForm();
    setModalType(null);
  };

  const handleEditExperience = () => {
    if (!selectedItem || !experienceForm.name || !experienceForm.price) return;

    updateExperience(selectedItem.id, {
      name: experienceForm.name,
      price: parseFloat(experienceForm.price),
      description: experienceForm.description,
      duration: experienceForm.duration,
      capacity: parseInt(experienceForm.capacity) || 10,
      image: experienceForm.image
    });

    resetExperienceForm();
    setModalType(null);
    setSelectedItem(null);
  };

  const handleDelete = () => {
    if (!selectedItem) return;

    if (activeTab === 'products') {
      deleteProduct(selectedItem.id);
    } else {
      deleteExperience(selectedItem.id);
    }

    setModalType(null);
    setSelectedItem(null);
    setShowOptions(null);
  };

  const openEditModal = (item: Product | Experience) => {
    setSelectedItem(item);

    if (activeTab === 'products') {
      const product = item as Product;
      setProductForm({
        name: product.name,
        price: product.price.toString(),
        stock: product.stock.toString(),
        description: product.description || '',
        category: product.category || '',
        image: product.image
      });
      setModalType('edit-product');
    } else {
      const experience = item as Experience;
      setExperienceForm({
        name: experience.name,
        price: experience.price.toString(),
        description: experience.description || '',
        duration: experience.duration || '',
        capacity: experience.capacity?.toString() || '',
        image: experience.image
      });
      setModalType('edit-experience');
    }

    setShowOptions(null);
  };

  const openDeleteModal = (item: Product | Experience) => {
    setSelectedItem(item);
    setModalType('delete');
    setShowOptions(null);
  };

  return (
    <div className="relative w-full h-full bg-[#f9fafb] flex flex-col">

      {/* Header */}
      <div className="bg-white border-b border-[#e9eaeb] shadow-sm">
        <div className="px-4 py-4 flex items-center justify-between">
          <h1 className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#181d27]">Mi Catálogo</h1>
          <button
            onClick={() => setModalType(activeTab === 'products' ? 'add-product' : 'add-experience')}
            className="bg-[#f72585] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
          >
            <Plus size={24} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex px-4">
          <button
            onClick={() => setActiveTab('products')}
            className={`flex-1 pb-4 font-['Poppins:SemiBold',sans-serif] text-[15px] transition-colors relative ${activeTab === 'products' ? 'text-[#f72585]' : 'text-[#717680]'
              }`}
          >
            <div className="flex items-center justify-center gap-2">
              <Package size={18} />
              <span>Productos</span>
              <span className="bg-[#f72585] text-white text-[11px] px-2 py-0.5 rounded-full">{products.length}</span>
            </div>
            {activeTab === 'products' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f72585]" />
            )}
          </button>

          <button
            onClick={() => setActiveTab('experiences')}
            className={`flex-1 pb-4 font-['Poppins:SemiBold',sans-serif] text-[15px] transition-colors relative ${activeTab === 'experiences' ? 'text-[#f72585]' : 'text-[#717680]'
              }`}
          >
            <div className="flex items-center justify-center gap-2">
              <Ticket size={18} />
              <span>Experiencias</span>
              <span className="bg-[#4cc9f0] text-white text-[11px] px-2 py-0.5 rounded-full">{experiences.length}</span>
            </div>
            {activeTab === 'experiences' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f72585]" />
            )}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 py-6 space-y-4">
          {activeTab === 'products' ? (
            products.length === 0 ? (
              <div className="text-center py-16">
                <Package size={48} className="mx-auto text-[#d5d7da] mb-4" />
                <p className="font-['Poppins:Medium',sans-serif] text-[15px] text-[#717680]">
                  No hay productos aún
                </p>
                <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#98a2b3] mt-1">
                  Agrega tu primer café para comenzar
                </p>
              </div>
            ) : (
              products.map((product) => (
                <div key={product.id} className="bg-white border border-[#e9eaeb] rounded-2xl p-4 shadow-sm relative">
                  <div className="flex gap-4">
                    <div className="w-20 h-20 bg-[#f9fafb] rounded-xl overflow-hidden flex-shrink-0 border border-[#f2f4f7]">
                      <ImageWithFallback src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-['Poppins:SemiBold',sans-serif] text-[15px] text-[#181d27]">{product.name}</h3>
                          <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#f72585]">
                            ${product.price.toLocaleString('es-CO')}
                          </p>
                        </div>
                        <button
                          onClick={() => setShowOptions(showOptions === product.id ? null : product.id)}
                          className="p-1 text-[#98a2b3] hover:text-[#181d27]"
                        >
                          <MoreVertical size={20} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                          <span className={`w-2 h-2 rounded-full ${product.status === 'out' ? 'bg-red-500' :
                            product.status === 'low' ? 'bg-orange-500' : 'bg-green-500'
                            }`} />
                          <span className="font-['Poppins:Medium',sans-serif] text-[12px] text-[#717680]">
                            Stock: <span className="text-[#181d27] font-semibold">{product.stock}</span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Options Menu */}
                  {showOptions === product.id && (
                    <div className="absolute right-4 top-16 bg-white border border-[#e9eaeb] rounded-2xl shadow-lg overflow-hidden z-10 min-w-[160px]">
                      <button
                        onClick={() => openEditModal(product)}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#f9fafb] transition-colors text-left"
                      >
                        <Edit2 size={16} className="text-[#4cc9f0]" />
                        <span className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#344054]">Editar</span>
                      </button>
                      <button
                        onClick={() => openDeleteModal(product)}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#fef2f8] transition-colors text-left border-t border-[#f2f4f7]"
                      >
                        <Trash2 size={16} className="text-[#f72585]" />
                        <span className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#f72585]">Eliminar</span>
                      </button>
                    </div>
                  )}
                </div>
              ))
            )
          ) : (
            experiences.length === 0 ? (
              <div className="text-center py-16">
                <Ticket size={48} className="mx-auto text-[#d5d7da] mb-4" />
                <p className="font-['Poppins:Medium',sans-serif] text-[15px] text-[#717680]">
                  No hay experiencias aún
                </p>
                <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#98a2b3] mt-1">
                  Crea tu primera experiencia turística
                </p>
              </div>
            ) : (
              experiences.map((exp) => (
                <div key={exp.id} className="bg-white border border-[#e9eaeb] rounded-2xl p-4 shadow-sm relative">
                  <div className="flex gap-4 mb-4">
                    <div className="w-20 h-20 bg-[#f9fafb] rounded-xl overflow-hidden flex-shrink-0 border border-[#f2f4f7]">
                      <ImageWithFallback src={exp.image} alt={exp.name} className="w-full h-full object-cover" />
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-['Poppins:SemiBold',sans-serif] text-[15px] text-[#181d27] leading-tight mb-1">{exp.name}</h3>
                          <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#f72585]">
                            ${exp.price.toLocaleString('es-CO')}
                          </p>
                        </div>
                        <button
                          onClick={() => setShowOptions(showOptions === exp.id ? null : exp.id)}
                          className="p-1 text-[#98a2b3] hover:text-[#181d27]"
                        >
                          <MoreVertical size={20} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-3 border-t border-[#f2f4f7]">
                    <div className="flex items-center gap-2 px-3 py-1.5 bg-[#f2f4f7] rounded-full flex-1">
                      <Calendar size={14} className="text-[#717680]" />
                      <span className="font-['Poppins:SemiBold',sans-serif] text-[11px] text-[#344054]">
                        {exp.bookings} reservas
                      </span>
                    </div>
                    {exp.duration && (
                      <div className="flex items-center gap-2 px-3 py-1.5 bg-[#f2f4f7] rounded-full">
                        <span className="font-['Poppins:SemiBold',sans-serif] text-[11px] text-[#344054]">
                          {exp.duration}
                        </span>
                      </div>
                    )}
                    {exp.capacity && (
                      <div className="flex items-center gap-1 px-2 py-1.5 bg-[#f2f4f7] rounded-full">
                        <Users size={13} className="text-[#717680]" />
                        <span className="font-['Poppins:SemiBold',sans-serif] text-[11px] text-[#344054]">
                          {exp.capacity}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Options Menu */}
                  {showOptions === exp.id && (
                    <div className="absolute right-4 top-16 bg-white border border-[#e9eaeb] rounded-2xl shadow-lg overflow-hidden z-10 min-w-[160px]">
                      <button
                        onClick={() => openEditModal(exp)}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#f9fafb] transition-colors text-left"
                      >
                        <Edit2 size={16} className="text-[#4cc9f0]" />
                        <span className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#344054]">Editar</span>
                      </button>
                      <button
                        onClick={() => openDeleteModal(exp)}
                        className="w-full flex items-center gap-3 px-4 py-3 hover:bg-[#fef2f8] transition-colors text-left border-t border-[#f2f4f7]"
                      >
                        <Trash2 size={16} className="text-[#f72585]" />
                        <span className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#f72585]">Eliminar</span>
                      </button>
                    </div>
                  )}
                </div>
              ))
            )
          )}
          <div className="h-4" />
        </div>
      </div>

      <BottomNav activeTab="products" onNavigate={onNavigate} role="admin" />

      {/* Add/Edit Product Modal */}
      {(modalType === 'add-product' || modalType === 'edit-product') && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-[32px] p-8 w-full max-w-md shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-['Poppins:SemiBold',sans-serif] text-[22px] text-[#181d27]">
                {modalType === 'add-product' ? 'Nuevo Producto' : 'Editar Producto'}
              </h2>
              <button onClick={() => { setModalType(null); resetProductForm(); setSelectedItem(null); }} className="p-1 text-[#717680] hover:text-[#181d27]">
                <X size={24} />
              </button>
            </div>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#475467] ml-1">Nombre *</label>
                <input
                  value={productForm.name}
                  onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                  placeholder="Ej: Café Bourbon Rosado"
                  className="w-full px-4 py-3 bg-[#f9fafb] border border-[#d5d7da] rounded-xl font-['Poppins:Regular',sans-serif] text-[14px] outline-none focus:border-[#f72585] transition-colors"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#475467] ml-1">Precio *</label>
                  <input
                    value={productForm.price}
                    onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
                    placeholder="0"
                    type="number"
                    className="w-full px-4 py-3 bg-[#f9fafb] border border-[#d5d7da] rounded-xl font-['Poppins:Regular',sans-serif] text-[14px] outline-none focus:border-[#f72585] transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#475467] ml-1">Stock</label>
                  <input
                    value={productForm.stock}
                    onChange={(e) => setProductForm({ ...productForm, stock: e.target.value })}
                    placeholder="0"
                    type="number"
                    className="w-full px-4 py-3 bg-[#f9fafb] border border-[#d5d7da] rounded-xl font-['Poppins:Regular',sans-serif] text-[14px] outline-none focus:border-[#f72585] transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#475467] ml-1">Categoría</label>
                <input
                  value={productForm.category}
                  onChange={(e) => setProductForm({ ...productForm, category: e.target.value })}
                  placeholder="Ej: Premium, Orgánico"
                  className="w-full px-4 py-3 bg-[#f9fafb] border border-[#d5d7da] rounded-xl font-['Poppins:Regular',sans-serif] text-[14px] outline-none focus:border-[#f72585] transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#475467] ml-1">Descripción</label>
                <textarea
                  value={productForm.description}
                  onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                  placeholder="Detalles del perfil de taza..."
                  rows={3}
                  className="w-full px-4 py-3 bg-[#f9fafb] border border-[#d5d7da] rounded-xl font-['Poppins:Regular',sans-serif] text-[14px] outline-none focus:border-[#f72585] transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#475467] ml-1">URL de imagen</label>
                <input
                  value={productForm.image}
                  onChange={(e) => setProductForm({ ...productForm, image: e.target.value })}
                  placeholder="https://..."
                  className="w-full px-4 py-3 bg-[#f9fafb] border border-[#d5d7da] rounded-xl font-['Poppins:Regular',sans-serif] text-[14px] outline-none focus:border-[#f72585] transition-colors"
                />
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => { setModalType(null); resetProductForm(); setSelectedItem(null); }}
                  className="flex-1 px-4 py-4 border border-[#e9eaeb] text-[#344054] rounded-2xl font-['Poppins:SemiBold',sans-serif] text-[14px] hover:bg-[#f9fafb] transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={modalType === 'add-product' ? handleAddProduct : handleEditProduct}
                  className="flex-1 px-4 py-4 bg-[#f72585] text-white rounded-2xl font-['Poppins:SemiBold',sans-serif] text-[14px] shadow-lg shadow-[#f72585]/20 hover:bg-[#e01575] transition-colors"
                >
                  {modalType === 'add-product' ? 'Guardar' : 'Actualizar'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add/Edit Experience Modal */}
      {(modalType === 'add-experience' || modalType === 'edit-experience') && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-[32px] p-8 w-full max-w-md shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-['Poppins:SemiBold',sans-serif] text-[22px] text-[#181d27]">
                {modalType === 'add-experience' ? 'Nueva Experiencia' : 'Editar Experiencia'}
              </h2>
              <button onClick={() => { setModalType(null); resetExperienceForm(); setSelectedItem(null); }} className="p-1 text-[#717680] hover:text-[#181d27]">
                <X size={24} />
              </button>
            </div>
            <div className="space-y-4">
              <div className="space-y-1.5">
                <label className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#475467] ml-1">Nombre *</label>
                <input
                  value={experienceForm.name}
                  onChange={(e) => setExperienceForm({ ...experienceForm, name: e.target.value })}
                  placeholder="Ej: Tour del café"
                  className="w-full px-4 py-3 bg-[#f9fafb] border border-[#d5d7da] rounded-xl font-['Poppins:Regular',sans-serif] text-[14px] outline-none focus:border-[#f72585] transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#475467] ml-1">Precio *</label>
                <input
                  value={experienceForm.price}
                  onChange={(e) => setExperienceForm({ ...experienceForm, price: e.target.value })}
                  placeholder="0"
                  type="number"
                  className="w-full px-4 py-3 bg-[#f9fafb] border border-[#d5d7da] rounded-xl font-['Poppins:Regular',sans-serif] text-[14px] outline-none focus:border-[#f72585] transition-colors"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#475467] ml-1">Duración</label>
                  <input
                    value={experienceForm.duration}
                    onChange={(e) => setExperienceForm({ ...experienceForm, duration: e.target.value })}
                    placeholder="Ej: 3 horas"
                    className="w-full px-4 py-3 bg-[#f9fafb] border border-[#d5d7da] rounded-xl font-['Poppins:Regular',sans-serif] text-[14px] outline-none focus:border-[#f72585] transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#475467] ml-1">Capacidad</label>
                  <input
                    value={experienceForm.capacity}
                    onChange={(e) => setExperienceForm({ ...experienceForm, capacity: e.target.value })}
                    placeholder="10"
                    type="number"
                    className="w-full px-4 py-3 bg-[#f9fafb] border border-[#d5d7da] rounded-xl font-['Poppins:Regular',sans-serif] text-[14px] outline-none focus:border-[#f72585] transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#475467] ml-1">Descripción</label>
                <textarea
                  value={experienceForm.description}
                  onChange={(e) => setExperienceForm({ ...experienceForm, description: e.target.value })}
                  placeholder="Describe la experiencia..."
                  rows={3}
                  className="w-full px-4 py-3 bg-[#f9fafb] border border-[#d5d7da] rounded-xl font-['Poppins:Regular',sans-serif] text-[14px] outline-none focus:border-[#f72585] transition-colors"
                />
              </div>
              <div className="space-y-1.5">
                <label className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#475467] ml-1">URL de imagen</label>
                <input
                  value={experienceForm.image}
                  onChange={(e) => setExperienceForm({ ...experienceForm, image: e.target.value })}
                  placeholder="https://..."
                  className="w-full px-4 py-3 bg-[#f9fafb] border border-[#d5d7da] rounded-xl font-['Poppins:Regular',sans-serif] text-[14px] outline-none focus:border-[#f72585] transition-colors"
                />
              </div>
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => { setModalType(null); resetExperienceForm(); setSelectedItem(null); }}
                  className="flex-1 px-4 py-4 border border-[#e9eaeb] text-[#344054] rounded-2xl font-['Poppins:SemiBold',sans-serif] text-[14px] hover:bg-[#f9fafb] transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={modalType === 'add-experience' ? handleAddExperience : handleEditExperience}
                  className="flex-1 px-4 py-4 bg-[#f72585] text-white rounded-2xl font-['Poppins:SemiBold',sans-serif] text-[14px] shadow-lg shadow-[#f72585]/20 hover:bg-[#e01575] transition-colors"
                >
                  {modalType === 'add-experience' ? 'Guardar' : 'Actualizar'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {modalType === 'delete' && selectedItem && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-[32px] p-8 w-full max-w-sm shadow-2xl">
            <div className="w-16 h-16 bg-[#fef2f8] rounded-full flex items-center justify-center mx-auto mb-6">
              <Trash2 size={32} className="text-[#f72585]" />
            </div>
            <h2 className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#181d27] text-center mb-3">
              ¿Eliminar {activeTab === 'products' ? 'producto' : 'experiencia'}?
            </h2>
            <p className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#717680] text-center mb-8">
              Esta acción no se puede deshacer. {activeTab === 'products' ? 'El producto' : 'La experiencia'} será eliminado permanentemente.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => { setModalType(null); setSelectedItem(null); }}
                className="flex-1 px-4 py-4 border border-[#e9eaeb] text-[#344054] rounded-2xl font-['Poppins:SemiBold',sans-serif] text-[14px] hover:bg-[#f9fafb] transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleDelete}
                className="flex-1 px-4 py-4 bg-[#f72585] text-white rounded-2xl font-['Poppins:SemiBold',sans-serif] text-[14px] shadow-lg shadow-[#f72585]/20 hover:bg-[#e01575] transition-colors"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}