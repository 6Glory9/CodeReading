import com.yjf.common.util.Velocitys;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by jxilong on 2017-05-17.
 */
public class VelocityTest {

    public static void main(String[] arg) {
        String templateContent = "hello,$!name";
        Map<String, String> params = new HashMap<>();
        params.put("name", "glory");
        Velocitys.evaluate(templateContent, params);
    }
}
