import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Scanner sc = new Scanner(System.in);
		
		int A,B,C;

		int BB;
		A = sc.nextInt();
		B = sc.nextInt();
		C = sc.nextInt();
		
		//System.out.println(A+" "+B + " "+C+ " ");
		
		B = B+C;
		//System.out.println(B);
		if(B>=60) {
			BB= B/60;
			B = B%60;
			A= BB+A;
		}
		if(A >= 24) { 
			A= A%24;

		}
		
		System.out.println(A+" "+B);

	}

}
