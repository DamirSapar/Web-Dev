from models import Guitar, Piano

def main():
    my_guitar = Guitar("Fender Stratocaster", "Alder", 120000, 6)
    my_piano = Piano("Steinway & Sons", "Fir", 5000000, 88)

    instruments = [my_guitar, my_piano]

    print("--- Demonstration of musical instruments ---")
    
    for instrument in instruments:
        print(instrument)
        
        print(f"Action: {instrument.play()}")
        
        print(instrument.tune())
        print("-" * 40)

    print(f"The specifics of the guitar: {my_guitar.change_strings()}")
    print(f"The specifics of the piano: {my_piano.open_lid()}")

if __name__ == "__main__":
    main()