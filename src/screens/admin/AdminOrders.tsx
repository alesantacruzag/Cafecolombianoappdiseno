import { useState } from 'react';
import BottomNav from '../../components/BottomNav';
import type { Screen } from '../../App';
import { useApp, type Order, type ExperienceBooking } from '../../context/AppContext';
import { ShoppingBag, Ticket, Calendar, Users, Package2, X, ChevronDown } from 'lucide-react';

interface AdminOrdersProps {
  onNavigate: (screen: Screen) => void;
}

type Tab = 'orders' | 'bookings';
type ModalType = 'order-detail' | 'booking-detail' | null;

export default function AdminOrders({ onNavigate }: AdminOrdersProps) {
  const { orders, updateOrderStatus, experienceBookings, updateBookingStatus } = useApp();
  const [activeTab, setActiveTab] = useState<Tab>('orders');
  const [modalType, setModalType] = useState<ModalType>(null);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [selectedBooking, setSelectedBooking] = useState<ExperienceBooking | null>(null);
  const [showStatusDropdown, setShowStatusDropdown] = useState<string | null>(null);

  const getOrderStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'pending': return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'processing': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'shipped': return 'bg-purple-50 text-purple-700 border-purple-200';
      case 'delivered': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'cancelled': return 'bg-red-50 text-red-700 border-red-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const getBookingStatusColor = (status: ExperienceBooking['status']) => {
    switch (status) {
      case 'pending': return 'bg-amber-50 text-amber-700 border-amber-200';
      case 'confirmed': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'completed': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'cancelled': return 'bg-red-50 text-red-700 border-red-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const getOrderStatusText = (status: Order['status']) => {
    switch (status) {
      case 'pending': return 'Pendiente';
      case 'processing': return 'Procesando';
      case 'shipped': return 'Enviado';
      case 'delivered': return 'Entregado';
      case 'cancelled': return 'Cancelado';
      default: return status;
    }
  };

  const getBookingStatusText = (status: ExperienceBooking['status']) => {
    switch (status) {
      case 'pending': return 'Pendiente';
      case 'confirmed': return 'Confirmada';
      case 'completed': return 'Completada';
      case 'cancelled': return 'Cancelada';
      default: return status;
    }
  };

  const orderStatuses: Order['status'][] = ['pending', 'processing', 'shipped', 'delivered', 'cancelled'];
  const bookingStatuses: ExperienceBooking['status'][] = ['pending', 'confirmed', 'completed', 'cancelled'];

  const handleOrderStatusChange = (orderId: string, newStatus: Order['status']) => {
    updateOrderStatus(orderId, newStatus);
    setShowStatusDropdown(null);
  };

  const handleBookingStatusChange = (bookingId: string, newStatus: ExperienceBooking['status']) => {
    updateBookingStatus(bookingId, newStatus);
    setShowStatusDropdown(null);
  };

  const openOrderDetail = (order: Order) => {
    setSelectedOrder(order);
    setModalType('order-detail');
  };

  const openBookingDetail = (booking: ExperienceBooking) => {
    setSelectedBooking(booking);
    setModalType('booking-detail');
  };

  return (
    <div className="relative w-full h-full bg-[#f9fafb] flex flex-col">
      
      {/* Header */}
      <div className="bg-white border-b border-[#e9eaeb] shadow-sm">
        <div className="px-4 py-4 flex items-center justify-between">
          <h1 className="font-['Poppins:SemiBold',sans-serif] text-[20px] text-[#181d27]">Pedidos y Reservas</h1>
        </div>

        {/* Tabs */}
        <div className="flex px-4">
          <button
            onClick={() => setActiveTab('orders')}
            className={`flex-1 pb-4 font-['Poppins:SemiBold',sans-serif] text-[15px] transition-colors relative ${
              activeTab === 'orders' ? 'text-[#f72585]' : 'text-[#717680]'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <ShoppingBag size={18} />
              <span>Pedidos</span>
              <span className="bg-[#f72585] text-white text-[11px] px-2 py-0.5 rounded-full">{orders.length}</span>
            </div>
            {activeTab === 'orders' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f72585]" />
            )}
          </button>
          
          <button
            onClick={() => setActiveTab('bookings')}
            className={`flex-1 pb-4 font-['Poppins:SemiBold',sans-serif] text-[15px] transition-colors relative ${
              activeTab === 'bookings' ? 'text-[#f72585]' : 'text-[#717680]'
            }`}
          >
            <div className="flex items-center justify-center gap-2">
              <Ticket size={18} />
              <span>Reservas</span>
              <span className="bg-[#4cc9f0] text-white text-[11px] px-2 py-0.5 rounded-full">{experienceBookings.length}</span>
            </div>
            {activeTab === 'bookings' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f72585]" />
            )}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 py-6 space-y-4">
          {activeTab === 'orders' ? (
            orders.length === 0 ? (
              <div className="text-center py-16">
                <ShoppingBag size={48} className="mx-auto text-[#d5d7da] mb-4" />
                <p className="font-['Poppins:Medium',sans-serif] text-[15px] text-[#717680]">
                  No hay pedidos aún
                </p>
                <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#98a2b3] mt-1">
                  Los pedidos de productos aparecerán aquí
                </p>
              </div>
            ) : (
              orders.map((order) => (
                <div key={order.id} className="bg-white border border-[#e9eaeb] rounded-2xl p-5 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <h3 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#181d27] tracking-tight">
                          #{order.id}
                        </h3>
                      </div>
                      <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#344054] mb-1">
                        {order.customer}
                      </p>
                      <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#717680]">
                        {order.date} • {order.items} {order.items === 1 ? 'producto' : 'productos'}
                      </p>
                    </div>
                    <div className="relative">
                      <button
                        onClick={() => setShowStatusDropdown(showStatusDropdown === order.id ? null : order.id)}
                        className={`px-3 py-1.5 rounded-full border font-['Poppins:SemiBold',sans-serif] text-[11px] uppercase tracking-wider flex items-center gap-1 ${getOrderStatusColor(order.status)}`}
                      >
                        {getOrderStatusText(order.status)}
                        <ChevronDown size={14} />
                      </button>
                      
                      {/* Status Dropdown */}
                      {showStatusDropdown === order.id && (
                        <div className="absolute right-0 top-full mt-2 bg-white border border-[#e9eaeb] rounded-2xl shadow-lg overflow-hidden z-10 min-w-[140px]">
                          {orderStatuses.map((status) => (
                            <button
                              key={status}
                              onClick={() => handleOrderStatusChange(order.id, status)}
                              className={`w-full px-4 py-2.5 text-left font-['Poppins:Medium',sans-serif] text-[13px] transition-colors ${
                                order.status === status ? 'bg-[#fef2f8] text-[#f72585]' : 'text-[#344054] hover:bg-[#f9fafb]'
                              }`}
                            >
                              {getOrderStatusText(status)}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-[#f2f4f7]">
                    <p className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#181d27]">
                      ${order.total.toLocaleString('es-CO')}
                    </p>
                    <button 
                      onClick={() => openOrderDetail(order)}
                      className="px-4 py-2 bg-[#f9fafb] border border-[#e9eaeb] rounded-xl text-[13px] font-['Poppins:SemiBold',sans-serif] text-[#344054] hover:bg-[#f2f4f7] transition-colors"
                    >
                      Ver detalles
                    </button>
                  </div>
                </div>
              ))
            )
          ) : (
            experienceBookings.length === 0 ? (
              <div className="text-center py-16">
                <Ticket size={48} className="mx-auto text-[#d5d7da] mb-4" />
                <p className="font-['Poppins:Medium',sans-serif] text-[15px] text-[#717680]">
                  No hay reservas aún
                </p>
                <p className="font-['Poppins:Regular',sans-serif] text-[13px] text-[#98a2b3] mt-1">
                  Las reservas de experiencias aparecerán aquí
                </p>
              </div>
            ) : (
              experienceBookings.map((booking) => (
                <div key={booking.id} className="bg-white border border-[#e9eaeb] rounded-2xl p-5 shadow-sm">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1.5">
                        <h3 className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#181d27] tracking-tight">
                          #{booking.id}
                        </h3>
                        <span className="bg-[#fef2f8] text-[#f72585] text-[10px] font-['Poppins:SemiBold',sans-serif] px-2 py-0.5 rounded-full uppercase">
                          Experiencia
                        </span>
                      </div>
                      <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#344054] mb-1">
                        {booking.customer}
                      </p>
                      <p className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#717680] mb-1">
                        {booking.experienceName}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <div className="flex items-center gap-1.5 text-[#717680]">
                          <Calendar size={13} />
                          <span className="font-['Poppins:Regular',sans-serif] text-[12px]">{booking.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-[#717680]">
                          <Users size={13} />
                          <span className="font-['Poppins:Regular',sans-serif] text-[12px]">{booking.visitors} {booking.visitors === 1 ? 'persona' : 'personas'}</span>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <button
                        onClick={() => setShowStatusDropdown(showStatusDropdown === booking.id ? null : booking.id)}
                        className={`px-3 py-1.5 rounded-full border font-['Poppins:SemiBold',sans-serif] text-[11px] uppercase tracking-wider flex items-center gap-1 ${getBookingStatusColor(booking.status)}`}
                      >
                        {getBookingStatusText(booking.status)}
                        <ChevronDown size={14} />
                      </button>
                      
                      {/* Status Dropdown */}
                      {showStatusDropdown === booking.id && (
                        <div className="absolute right-0 top-full mt-2 bg-white border border-[#e9eaeb] rounded-2xl shadow-lg overflow-hidden z-10 min-w-[140px]">
                          {bookingStatuses.map((status) => (
                            <button
                              key={status}
                              onClick={() => handleBookingStatusChange(booking.id, status)}
                              className={`w-full px-4 py-2.5 text-left font-['Poppins:Medium',sans-serif] text-[13px] transition-colors ${
                                booking.status === status ? 'bg-[#fef2f8] text-[#f72585]' : 'text-[#344054] hover:bg-[#f9fafb]'
                              }`}
                            >
                              {getBookingStatusText(status)}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-[#f2f4f7]">
                    <p className="font-['Poppins:SemiBold',sans-serif] text-[18px] text-[#181d27]">
                      ${booking.total.toLocaleString('es-CO')}
                    </p>
                    <button 
                      onClick={() => openBookingDetail(booking)}
                      className="px-4 py-2 bg-[#f9fafb] border border-[#e9eaeb] rounded-xl text-[13px] font-['Poppins:SemiBold',sans-serif] text-[#344054] hover:bg-[#f2f4f7] transition-colors"
                    >
                      Ver detalles
                    </button>
                  </div>
                </div>
              ))
            )
          )}
          <div className="h-4" />
        </div>
      </div>

      <BottomNav activeTab="orders" onNavigate={onNavigate} role="admin" />

      {/* Order Detail Modal */}
      {modalType === 'order-detail' && selectedOrder && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-[32px] p-8 w-full max-w-md shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-['Poppins:SemiBold',sans-serif] text-[22px] text-[#181d27]">
                Detalles del Pedido
              </h2>
              <button onClick={() => { setModalType(null); setSelectedOrder(null); }} className="p-1 text-[#717680] hover:text-[#181d27]">
                <X size={24} />
              </button>
            </div>

            <div className="space-y-6">
              {/* Order ID & Status */}
              <div className="bg-[#f9fafb] rounded-2xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#717680]">Pedido</span>
                  <span className="font-['Poppins:SemiBold',sans-serif] text-[15px] text-[#181d27]">#{selectedOrder.id}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#717680]">Estado</span>
                  <span className={`px-3 py-1 rounded-full border font-['Poppins:SemiBold',sans-serif] text-[11px] uppercase ${getOrderStatusColor(selectedOrder.status)}`}>
                    {getOrderStatusText(selectedOrder.status)}
                  </span>
                </div>
              </div>

              {/* Customer Info */}
              <div>
                <h3 className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#181d27] mb-3">Cliente</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#717680]">Nombre</span>
                    <span className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#181d27]">{selectedOrder.customer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#717680]">Email</span>
                    <span className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#181d27]">{selectedOrder.customerEmail}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#717680]">Fecha</span>
                    <span className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#181d27]">{selectedOrder.date}</span>
                  </div>
                </div>
              </div>

              {/* Products */}
              <div>
                <h3 className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#181d27] mb-3">Productos</h3>
                <div className="space-y-3">
                  {selectedOrder.products.map((product, index) => (
                    <div key={index} className="flex items-center justify-between bg-[#f9fafb] rounded-xl p-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#fef2f8] text-[#f72585] rounded-lg flex items-center justify-center">
                          <Package2 size={20} />
                        </div>
                        <div>
                          <p className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#181d27]">{product.name}</p>
                          <p className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#717680]">Cantidad: {product.quantity}</p>
                        </div>
                      </div>
                      <p className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#f72585]">
                        ${(product.price * product.quantity).toLocaleString('es-CO')}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Total */}
              <div className="bg-[#fef2f8] rounded-2xl p-4 border-2 border-[#f72585]">
                <div className="flex items-center justify-between">
                  <span className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#181d27]">Total</span>
                  <span className="font-['Poppins:Bold',sans-serif] text-[20px] text-[#f72585]">
                    ${selectedOrder.total.toLocaleString('es-CO')}
                  </span>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => { setModalType(null); setSelectedOrder(null); }}
                className="w-full px-4 py-4 bg-[#f72585] text-white rounded-2xl font-['Poppins:SemiBold',sans-serif] text-[14px] shadow-lg shadow-[#f72585]/20 hover:bg-[#e01575] transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Booking Detail Modal */}
      {modalType === 'booking-detail' && selectedBooking && (
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-[32px] p-8 w-full max-w-md shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-['Poppins:SemiBold',sans-serif] text-[22px] text-[#181d27]">
                Detalles de la Reserva
              </h2>
              <button onClick={() => { setModalType(null); setSelectedBooking(null); }} className="p-1 text-[#717680] hover:text-[#181d27]">
                <X size={24} />
              </button>
            </div>

            <div className="space-y-6">
              {/* Booking ID & Status */}
              <div className="bg-[#f9fafb] rounded-2xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#717680]">Reserva</span>
                  <span className="font-['Poppins:SemiBold',sans-serif] text-[15px] text-[#181d27]">#{selectedBooking.id}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-['Poppins:Medium',sans-serif] text-[13px] text-[#717680]">Estado</span>
                  <span className={`px-3 py-1 rounded-full border font-['Poppins:SemiBold',sans-serif] text-[11px] uppercase ${getBookingStatusColor(selectedBooking.status)}`}>
                    {getBookingStatusText(selectedBooking.status)}
                  </span>
                </div>
              </div>

              {/* Customer Info */}
              <div>
                <h3 className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#181d27] mb-3">Cliente</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#717680]">Nombre</span>
                    <span className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#181d27]">{selectedBooking.customer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-['Poppins:Regular',sans-serif] text-[14px] text-[#717680]">Email</span>
                    <span className="font-['Poppins:Medium',sans-serif] text-[14px] text-[#181d27]">{selectedBooking.customerEmail}</span>
                  </div>
                </div>
              </div>

              {/* Experience Info */}
              <div>
                <h3 className="font-['Poppins:SemiBold',sans-serif] text-[14px] text-[#181d27] mb-3">Experiencia</h3>
                <div className="bg-[#f9fafb] rounded-xl p-4 space-y-2">
                  <p className="font-['Poppins:SemiBold',sans-serif] text-[15px] text-[#181d27]">{selectedBooking.experienceName}</p>
                  <div className="flex items-center gap-1.5 text-[#717680]">
                    <Calendar size={14} />
                    <span className="font-['Poppins:Regular',sans-serif] text-[13px]">{selectedBooking.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#717680]">
                    <Users size={14} />
                    <span className="font-['Poppins:Regular',sans-serif] text-[13px]">{selectedBooking.visitors} {selectedBooking.visitors === 1 ? 'persona' : 'personas'}</span>
                  </div>
                  <div className="pt-2 border-t border-[#e9eaeb]">
                    <span className="font-['Poppins:Regular',sans-serif] text-[12px] text-[#717680]">Fecha de reserva: {selectedBooking.bookingDate}</span>
                  </div>
                </div>
              </div>

              {/* Total */}
              <div className="bg-[#fef2f8] rounded-2xl p-4 border-2 border-[#f72585]">
                <div className="flex items-center justify-between">
                  <span className="font-['Poppins:SemiBold',sans-serif] text-[16px] text-[#181d27]">Total</span>
                  <span className="font-['Poppins:Bold',sans-serif] text-[20px] text-[#f72585]">
                    ${selectedBooking.total.toLocaleString('es-CO')}
                  </span>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => { setModalType(null); setSelectedBooking(null); }}
                className="w-full px-4 py-4 bg-[#f72585] text-white rounded-2xl font-['Poppins:SemiBold',sans-serif] text-[14px] shadow-lg shadow-[#f72585]/20 hover:bg-[#e01575] transition-colors"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}