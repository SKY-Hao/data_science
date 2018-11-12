import java.sql.*;
import java.text.SimpleDateFormat;
import java.util.Random;

/**
 * 功能：随机生成优惠码
 * @author iamwiam
 *
 */
public class JaveSqlTest {
 /*   public static void main(String[] args) {
        final int ACTIVATEDCODENUM = 200;
        Random random = new Random();
        String candicatedCode = "abcdefghijklmnopqrstuvwxyz";
        candicatedCode+=candicatedCode.toUpperCase();
        candicatedCode+="1234567890";
        for(int i=0;i<ACTIVATEDCODENUM;i++){
            String res ="";
            for(int j=0;j<8;j++){
                res+=candicatedCode.charAt(random.nextInt(candicatedCode.length()));
            }
//   String pwd = Activatedcode.getMD5(Activatedcode.getMD5(res));
            insertToMysql(res);
        }
    }
    private static void insertToMysql(String res) {
        int n=0;
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(
                    "jdbc:mysql://127.0.0.1:3306/aaa?serverTimezone=Asia/Shanghai&useUnicode=true&characterEncoding=utf8&autoReconnect=true&rewriteBatchedStatements=TRUE&useSSL=false&allowPublicKeyRetrieval=true",
                    "root", "root");
            String sql = "insert into checkNum(value) values(?)";
            PreparedStatement ps = connection.prepareStatement(sql);
            ps.setObject(1, res);
            n = ps.executeUpdate();
        } catch (ClassNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
    }*/

    private String url = "jdbc:mysql://localhost:3306/aaa?serverTimezone=Asia/Shanghai&useUnicode=true&characterEncoding=utf8&autoReconnect=true&rewriteBatchedStatements=TRUE&useSSL=false";
    private String user = "root";
    private String password = "root";

    public void Test(){
        Connection conn = null;
        PreparedStatement pstm = null;
        ResultSet rt = null;
        try{
            Class.forName("com.mysql.jdbc.Driver");
            conn = DriverManager.getConnection(url,user,password);
            String sql = "INSERT INTO user(name,sex,age,tel,time) VALUES(?,?,?,?,now())";
            pstm = conn.prepareStatement(sql);

            conn.setAutoCommit(false);
            Long startTime = System.currentTimeMillis();



            for (int n = 1;n <= 10;n++){
                Random rand = new Random();

                for (int i = 1;i <=100;i++){
                    int a = rand.nextInt(20);
                    int b = rand.nextInt(10);
                    int c = rand.nextInt(10);
                    int d = rand.nextInt(10);

                    int upCase = rand.nextInt(26)+65;//得到65-90的随机数
                    int downCase = rand.nextInt(26)+97;//得到97-122的随机数
                    String up = String .valueOf((char)upCase);//得到A-Z
                    String down = String .valueOf((char)downCase);//得到a-z

                    pstm.setString(1,up+down);
                    pstm.setString(2,"男");
                    pstm.setInt(3, a);
                    pstm.setInt(4, a+5+b+c+2+d);
                    pstm.addBatch();
                }
                pstm.executeBatch();
                conn.commit();
                System.out.println("已经存入"+n+"条");
            }

            Long endTime = System.currentTimeMillis();
            System.out.println("用时"+(endTime-startTime));

        } catch(Exception e){
            e.printStackTrace();
            throw new RuntimeException(e);
        } finally{
            if(pstm != null){
                try{
                    pstm.close();
                } catch(SQLException e){
                    e.printStackTrace();
                    throw new RuntimeException(e);
                }
            }
            if(conn != null){
                try{conn.close();
                } catch(SQLException e){
                    e.printStackTrace();
                    throw new RuntimeException(e);
                }
            }
        }
    }


}