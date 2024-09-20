INSERT INTO amenity (name) VALUES 
('Air conditioning'), 
('Dryer'), 
('Essentials'), 
('Heating'), 
('Hot water'), 
('Kitchen'), 
('TV'), 
('Washer'), 
('Wifi'), 
('Bathtub'), 
('Bidet'), 
('Body soap'), 
('Cleaning products'), 
('Conditioner'), 
('Hair dryer')
;

INSERT INTO booking_status (id, status_name) VALUES
("0", "DRAFT"),
("1", "BOOKED"),
("2", "COMPLETED"),
("3", "CANCELLED");

INSERT INTO availability_status (id, status_name) VALUES
("0", "AVAILABLE"),
("1", "HELD"),
("2", "BOOKED"),
("3", "SERVED");
