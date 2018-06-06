public class Car {
  
  public static final double FAVNUMBER = 1.6180;

  private String model;

  // 32 bit
  private int year;

  // 64 bit
  private long miles;

  protected static int numberOfCars = 0;
  
  // private float => 32 bit decimal not accurate
  // private double => 64 bit decimal more accurate
  // private byte => 8 bit number
  // protected => only available to the package
  
  public Car(String _model, int _year, long _miles){
    numberOfCars++;

    this.model = _model;
    this.year = _year;
    this.miles = _miles;
  }

  public static void main(String[] args) {
    Car delorean = new Car("delorean", 1985, 10210000000L);
  }
}