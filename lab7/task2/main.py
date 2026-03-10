from models import Guitar, Piano

def main():
    my_guitar = Guitar("Fender Stratocaster", "Ольха", 120000, 6)
    my_piano = Piano("Steinway & Sons", "Ель", 5000000, 88)

    instruments = [my_guitar, my_piano]

    print("--- Демонстрация инструментов ---")
    
    for instrument in instruments:
        print(instrument)
        
        print(f"Действие: {instrument.play()}")
        
        print(instrument.tune())
        print("-" * 30)

    print(f"Специфика гитары: {my_guitar.change_strings()}")
    print(f"Специфика пианино: {my_piano.open_lid()}")

if __name__ == "__main__":
    main()