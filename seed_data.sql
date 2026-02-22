-- SEED DATA FOR ORIGEN (CAFES Y EXPERIENCIAS)

-- 1. CAFÉS (PRODUCTOS)
INSERT INTO public.cafes (nombre, origen, precio, stock, image_url, is_active)
VALUES 
('Café Quindío Premium', 'Armenia, Quindío', 26000, 50, 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400', true),
('Buenavista Especial', 'Buenavista, Quindío', 40800, 30, 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400', true),
('Delirante Salento', 'Salento, Quindío', 26000, 25, 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400', true),
('Guanes Santander', 'Socorro, Santander', 31000, 40, 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400', true),
('San Alberto', 'Buenavista, Quindío', 45000, 20, 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400', true),
('Café Frutal Huila', 'Pitalito, Huila', 28000, 15, 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400', true)
ON CONFLICT (id) DO NOTHING;

-- 2. EXPERIENCIAS
INSERT INTO public.experiencias (titulo, ubicacion, precio, cupos, image_url, is_active)
VALUES 
('Tour "Del Grano a la Taza"', 'Finca Cafetera, Quindío', 65000, 15, 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400', true),
('Senderismo Valle de Cocora', 'Salento, Quindío', 50000, 20, 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400', true),
('Vuelo en Globo sobre Cafetales', 'Armenia, Quindío', 450000, 6, 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400', true),
('Cata de Cafés Especiales', 'Filandia, Quindío', 40000, 10, 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400', true),
('Taller de Barismo Nivel 1', 'Pereira, Risaralda', 120000, 8, 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400', true)
ON CONFLICT (id) DO NOTHING;
