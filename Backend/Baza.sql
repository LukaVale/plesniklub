

SELECT name, collation_name FROM sys.databases;
GO
ALTER DATABASE db_ab6221_ps SET SINGLE_USER WITH
ROLLBACK IMMEDIATE;
GO
ALTER DATABASE db_ab6221_ps COLLATE Croatian_CI_AS;
GO
ALTER DATABASE db_ab6221_ps SET MULTI_USER;
GO
SELECT name, collation_name FROM sys.databases;
GO


-- Tablica VRSTE PLESA
CREATE TABLE VrstePlesa (
    Sifra INT IDENTITY (1,1) PRIMARY KEY,
    Naziv VARCHAR(40) NOT NULL
);

-- Tablica VODITELJ
CREATE TABLE Voditelj (
    Sifra INT IDENTITY (1,1) PRIMARY KEY ,
    Ime VARCHAR(20) NOT NULL,
    Prezime VARCHAR(35) NOT NULL,
    Mail VARCHAR(40) UNIQUE NOT NULL
);

-- Tablica POLAZNIK
CREATE TABLE Polaznik (
    Sifra INT IDENTITY (1,1) PRIMARY KEY ,
    Ime VARCHAR(20) NOT NULL,
    Prezime VARCHAR(35) NOT NULL,
    Mail VARCHAR(40) UNIQUE 
);

-- Tablica GRUPA
CREATE TABLE Grupa (
    Sifra INT IDENTITY (1,1) PRIMARY KEY ,
    Naziv VARCHAR(30) NOT NULL,
    Opis TEXT,
    Vrsta_Plesa INT,
    Voditelj INT,
    FOREIGN KEY (Vrsta_Plesa) REFERENCES VrstePlesa(Sifra),
    FOREIGN KEY (Voditelj) REFERENCES Voditelj(Sifra)
);

-- Povezivanje polaznika i grupa (M:N veza)
CREATE TABLE Grupa_Polaznik (
    GrupaID INT,
    PolaznikID INT,
    PRIMARY KEY (GrupaID, PolaznikID),
    FOREIGN KEY (GrupaID) REFERENCES Grupa(Sifra),
    FOREIGN KEY (PolaznikID) REFERENCES Polaznik(Sifra)
);

-- Ubacivanje podataka u tablicu VrstePlesa
INSERT INTO VrstePlesa (Naziv) VALUES 
('Salsa'),
('Tango'),
('Hip Hop'),
('Balet'),
('Jazz Dance');

-- Ubacivanje podataka u tablicu Voditelj
INSERT INTO Voditelj (Ime, Prezime, Mail) VALUES 
('Ana', 'Kova�evi�', 'ana.kovacevic@example.com'),
('Marko', 'Horvat', 'marko.horvat@example.com'),
('Petra', 'Novak', 'petra.novak@example.com'),
('Ivan', 'Bari�', 'ivan.baric@example.com'),
('Lana', 'Zori�', 'lana.zoric@example.com');

-- Ubacivanje podataka u tablicu Polaznik
INSERT INTO Polaznik (Ime, Prezime, Mail) VALUES 
('Luka', 'Peri�', 'luka.peric@example.com'),
('Mia', 'Juri�', 'mia.juric@example.com'),
('Karlo', 'Tomi�', 'karlo.tomic@example.com'),
('Ema', 'Radi�', 'ema.radic@example.com'),
('Dora', 'Babi�', 'dora.babic@example.com');

-- Ubacivanje podataka u tablicu Grupa
INSERT INTO Grupa (Naziv, Opis, Vrsta_Plesa, Voditelj) VALUES 
('Salsa po�etnici', 'Grupa za sve koji tek ulaze u svijet salse.', 1, 1),
('Napredni Tango', 'Za one koji ve� imaju iskustvo s tangom.', 2, 2),
('Hip Hop juniori', 'Vesela i energi�na grupa za mla�e plesa�e.', 3, 3),
('Balet za odrasle', 'Baletni te�aj za odrasle po�etnike.', 4, 4),
('Jazz Dance stariji', 'Napredni jazz dance za starije grupe.', 5, 5);


INSERT INTO Grupa_Polaznik (GrupaID, PolaznikID) VALUES
(1, 1), -- Luka u Salsa po�etnici
(1, 2), -- Mia u Salsa po�etnici
(2, 3), -- Karlo u Napredni Tango
(3, 4), -- Ema u Hip Hop juniori
(4, 5), -- Dora u Balet za odrasle
(5, 1), -- Luka u Jazz Dance stariji
(5, 2); -- Mia u Jazz Dance stariji