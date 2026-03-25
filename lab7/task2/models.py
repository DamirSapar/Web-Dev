class MusicalInstrument:
    def __init__(self, name, material, price):
        self.name = name
        self.material = material
        self.price = price

    def tune(self):
        return f"Setting up a musical instrument {self.name}..."

    def play(self):
        return "Makes some kind of sound"

    def __str__(self):
        return f"Instrument: {self.name} (Material: {self.material}, Price: {self.price} tenge)"

class Guitar(MusicalInstrument):
    def __init__(self, name, material, price, strings_count=6):
        super().__init__(name, material, price)
        self.strings_count = strings_count

    def play(self):
        return "Strum!"

    def change_strings(self):
        return f"Changing {self.strings_count} strings on the {self.name} guitar."
class Piano(MusicalInstrument):
    def __init__(self, name, material, price, keys_count=88):
        super().__init__(name, material, price)
        self.keys_count = keys_count

    def play(self):
        return "Plim-plim!"
    
    def open_lid(self):
        return "The piano lid is open"