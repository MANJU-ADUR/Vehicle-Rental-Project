package org.my.car.Exception;

public class CarNotFoundException extends RuntimeException {
	public CarNotFoundException(String message) {
		super(message);
	}
}
