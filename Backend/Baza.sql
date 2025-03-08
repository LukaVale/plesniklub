

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