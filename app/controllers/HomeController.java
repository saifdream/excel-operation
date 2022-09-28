package controllers;

import com.fasterxml.jackson.databind.JsonNode;
import model.BodyData;
import model.HeaderData;
import play.libs.Json;
import play.mvc.Controller;
import play.mvc.Result;
import views.html.*;
import views.html.jsonToHtml.jsonToHtmlIndex;
import views.html.jsonToHtml.welcome;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

/**
 * This controller contains an action to handle HTTP requests
 * to the application's home page.
 */
public class HomeController extends Controller {
    /**
     * An action that renders an HTML page with a welcome message.
     * The configuration in the <code>routes</code> file means that
     * this method will be called when the application receives a
     * <code>GET</code> request with a path of <code>/</code>.
     */
    public Result index() {
        return ok(index.render("Your new application is ready."));
    }

    public Result home() {
        return ok(home.render());
    }

    public Result web2excel() {
        return ok(web2excel.render());
    }

    public Result excel2web() {
        return ok(excel2web.render());
    }

    public Result saveExcelData(){
        JsonNode json = request().body().asJson();
        if(json == null) {
            return badRequest("Expecting Json data");
        } else {
            HeaderData headerData = new HeaderData();
            BodyData bodyData = Json.fromJson(json.findPath("gridBodyData"), BodyData.class);
            System.out.println("gridHeader: "+json.findPath("gridHeader"));
            //System.out.println("gridBodyData: "+bodyData.name[0]);
        }
        return ok();
    }

    public Result rowDetails() {
        return ok(rowDetails.render());
    }

    public Result banglaDate() {

        return ok(bangla_datepicker.render());
    }

    public Result randomDate() {
        Long max =0L;
        Long min =100000000000L;

        SimpleDateFormat spf = new SimpleDateFormat("yyyy/MM/dd");
        Random r = new Random();
        Long randomLong = (r.nextLong() % (max - min)) + min;
        Date dt = new Date(randomLong);

        return ok(spf.format(dt));
    }

    public Result jsonToHtml(){

        return ok(jsonToHtmlIndex.render("Your new application is ready."));
    }

    public Result welcome(){

        return ok(welcome.render());
    }

    public  Result dataJson(){
        String  jString = "{\"createFields\":[{\"type\":\"text\",\"label\":\"Name\",\"name\":\"fullName\",\"placeholder\":\"Full Name\",\"pattern\":\"\",\"required\":true},{\"type\":\"textarea\",\"label\":\"Address\",\"name\":\"address\",\"placeholder\":\"Full Address\",\"pattern\":\"\",\"required\":false},{\"type\":\"select\",\"label\":\"User Type\",\"name\":\"userType\",\"option\":[\"Admin\",\"Accountant\",\"Accountant\"],\"required\":true},{\"type\":\"radio\",\"label\":\"Gender\",\"name\":\"gender\",\"option\":[\"Male\",\"Female\"],\"required\":true},{\"type\":\"checkbox\",\"label\":\"\",\"name\":\"isAgree\",\"massage\":\"I agree.\",\"required\":true}]}";
        /*File jsonFile = Play._currentApp().getFile("public/data/data.json");
        String json = null;
        try {
            json = FileUtils.readFileToString(jsonFile);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return ok(json).as("application/json");*/
        return ok(jString);
    }

}
