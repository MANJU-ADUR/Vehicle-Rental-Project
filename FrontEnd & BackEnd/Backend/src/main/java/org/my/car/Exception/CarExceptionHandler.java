package org.my.car.Exception;

import org.my.car.dto.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class CarExceptionHandler {

	@ExceptionHandler(CarNotFoundException.class)
	public ResponseEntity<Response<String>> handleANFE(CarNotFoundException exception) {
		Response<String> response = new Response<>();
		response.setData("Car Not Found");
		response.setMessage(exception.getMessage());
		response.setHttpStatusCode(HttpStatus.NOT_FOUND.value());
		return new ResponseEntity<Response<String>>(response, HttpStatus.NOT_FOUND);
	}
}
