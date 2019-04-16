/* Data insertit */
INSERT INTO data(luokka, opiskelija, kurssi, opettaja, tenttityyppi, tentin_lisatiedot, kampus) VALUES("ERA17SP", "opiskelija1", "4 ECF4000 Tekniikan fysiikka", "Laasanen Mikko Sakari", "Uusintatentti", "", "");

/* Opettaja insertit */
INSERT INTO teacher(name, priority, email) VALUES("Opettaja1", 1, "Opettaja1@savonia.fi");
INSERT INTO teacher(name, priority, email) VALUES("Opettaja3", 2, "Opettaja3@savonia.fi");
INSERT INTO teacher(name, priority, email) VALUES("Opettaja2", 3, "Opettaja2@savonia.fi");

/* Luokka insertit */
INSERT INTO classroom(nimi, koko, atk, kampus) VALUES("A-6969", 5, false, "Kuopio" );
INSERT INTO classroom(nimi, koko, atk, kampus) VALUES("A-2041", 5, true, "Kuopio" );
INSERT INTO classroom(nimi, koko, atk, kampus) VALUES("B-2002", 60, true, "Kuopio" );
INSERT INTO classroom(nimi, koko, atk, kampus) VALUES("A-2054", 100, false, "Kuopio" );

/* Kurssi insertit */
INSERT INTO courses(nimi, atk) VALUES("4 ECF4000 Tekniikan fysiikka", true);
INSERT INTO courses(nimi, atk) VALUES("4 EKF4100 Konetekniikan fysiikka", true);
INSERT INTO courses(nimi, atk) VALUES("4 ERXT810 Rakennusmateriaalioppi", false);