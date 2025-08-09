EXPECTED_BAKE_TIME=40

def bake_time_remaining(port):
    """Bake time remaining 
    calculation"""
    return EXPECTED_BAKE_TIME-port
    
def preparation_time_in_minutes(number_of_layers):
    """Preparation time in minutes calculation"""
    return number_of_layers*2
    
def elapsed_time_in_minutes(number_of_layers,elapsed_bake_time):
    """Elapsed time in minutes calculation
    """
    return number_of_layers*2+elapsed_bake_time

#Sample usage for testing
print(bake_time_remaining(10))  # 30
print(preparation_time_in_minutes(2))  # 4
print(elapsed_time_in_minutes(3, 20))  # 26