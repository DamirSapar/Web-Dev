class MusicalInstrument:
    def __init__(self, name, material, price):
        self.name = name
        self.material = material
        self.price = price

    def tune(self):
        return f"Настраиваем инструмент {self.name}..."

    def play(self):
        return "Издает какой-то звук"

    def __str__(self):
        return f"Инструмент: {self.name} (Материал: {self.material}, Цена: {self.price} тенге)"

class Guitar(MusicalInstrument):
    def __init__(self, name, material, price, strings_count=6):
        super().__init__(name, material, price)
        self.strings_count = strings_count

    def play(self):
        return "Брэн-нь!"

    def change_strings(self):
        return f"Меняем {self.strings_count} струн на гитаре {self.name}."

class Piano(MusicalInstrument):
    def __init__(self, name, material, price, keys_count=88):
        super().__init__(name, material, price)
        self.keys_count = keys_count

    def play(self):
        return "Плим-плим!"
    
    def open_lid(self):
        return "Крышка пианино открыта"